import { useCallback, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client'
import { SearchPanel } from '../SearchPanel';
import { DELETE_USER, GET_USER, GET_USERS } from '../../graphql';
import { Container } from '../shared/Container';


type UserIntemProps = {
  user: User,
  onDeleteUser: () => void,
}
function UserItem({ user, onDeleteUser }: UserIntemProps) {
  return (
    <li style={{ padding: '10px' }} key={user._id}>
      <div>id: {user._id}</div>
      <div>email: {user.email}</div>
      <div>password: {user.password}</div>
      <button type="button" onClick={onDeleteUser}>Remove user</button>
    </li>
  )
}
function Home() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions[]>([]);
  const [selectedId, setSelectedId] = useState<string | undefined>();
  const handleSetOptions = (users: User[]) => {
    const options = users?.map(({ _id, email }) => ({
      value: _id,
      name: email,
    }))

    setFilterOptions(options)
  }

  const { loading, error, data, refetch: refetchGetUsers } = useQuery(GET_USERS, {
    onCompleted: (result) => handleSetOptions(result?.getAllUsers || []),
  });
  const { loading: loadingCountry, error: errorSelectedCountry, data: selecteUser } = useQuery(GET_USER, {
    variables: {
      _id: selectedId
    },
    skip: !selectedId || selectedId === 'none',
  });
  const [deleteUser, { loading: loadingDelete, error: errorDelete } ]= useMutation(DELETE_USER, {
    onCompleted: refetchGetUsers 
  });


  const handleSelectUser = useCallback(async (id: string) => {
    setSelectedId(id)
  }, []);

  const handleDeleteUser = useCallback(async (id: string) => {
    deleteUser({
      variables: {
        _id: id
      }
    })
  }, []);

  const loadred = 'data is loading...';
  const renderList = () => {
    if (loading) return loadred;
    if (filterOptions.length !== 0 && selecteUser?.getUser?._id) {
      return(
         <UserItem 
            user={selecteUser?.getUser} 
            onDeleteUser={() => handleDeleteUser(selecteUser._id)}
          />
        )
    }

    if (data && data.getAllUsers) {
      return (
        data?.getAllUsers?.map((user: any) => {
          return (
            <UserItem user={user} 
              onDeleteUser={() => handleDeleteUser(user._id)}
            />
          )
        }
        ))
    }
    return null
  }

  return (
      <Container>
        <SearchPanel
            onSelectUser={handleSelectUser}
            filterOptions={filterOptions}
            selectedUserId={selecteUser?.getAllUser?._id ?? undefined}
        />
        {loading || loadingCountry ? (
            loadred
        ) : (
            <ul>
            {renderList()}
            </ul>
        )}
      </Container>
  );
}

export default Home;
