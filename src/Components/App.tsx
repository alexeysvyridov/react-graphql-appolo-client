import React, { useCallback, useState } from 'react';
import { useQuery } from '@apollo/client'
import './App.css';
import { SearchPanel } from './SearchPanel';
import { GET_COUNTRY, GET_USER, GET_USERS } from '../graphql';


type UserIntemProps = {
  user: User
}
function UserItem({ user }: UserIntemProps) {
  return (
    <li key={user.id}>
      <div>id: {user.id}</div>
      <div>email: {user.email}</div>
      <div>password: {user.password}</div>
    </li>
  )
}
function App() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions[]>([]);
  const handleSetOptions = (users: User[]) => {
    const options = users?.map(({ id, email }) => ({
      value: id,
      name: email,
    }))

    setFilterOptions(options)
  }

  const { loading, error, data, client } = useQuery(GET_USERS, {
    onCompleted: (result) => handleSetOptions(result?.getAllUsers || []),
  });
  const { loading: loadingCountry, error: errorSelectedCountry, data: selecteUser, refetch } = useQuery(GET_USER);

  const handleSelectUser = useCallback(async (id: number) => {
    refetch({
      id: id
    })
  }, [client]);

  const loadred = 'data is loading...';

  const renderList = () => {
    if (loading) return loadred;
    if (filterOptions.length !== 0 && selecteUser?.getUser?.id) {
      return <UserItem user={selecteUser?.getUser} />
    }

    if (data && data.getAllUsers) {
      return (
        data?.getAllUsers?.map((user: any) => {
          return (
            <UserItem user={user} />
          )
        }
        ))
    }
    return null
  }

  return (
    <div className="App">
      <h1>app</h1>

      <SearchPanel
        onSelectUser={handleSelectUser}
        filterOptions={filterOptions}
        selectedUserId={selecteUser?.getAllUser?.id ?? undefined}
      />
      {loading || loadingCountry ? (
        loadred
      ) : (
        <ul>
          {renderList()}
        </ul>
      )}
    </div>
  );
}

export default App;
