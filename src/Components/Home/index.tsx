import { useCallback, useState } from 'react';
import { useQuery } from '@apollo/client'
import { SearchPanel } from '../SearchPanel';
import { GET_USER, GET_USERS } from '../../graphql';
import { Container } from '../shared/Container';


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
function Home() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions[]>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>();
  const handleSetOptions = (users: User[]) => {
    const options = users?.map(({ id, email }) => ({
      value: id,
      name: email,
    }))

    setFilterOptions(options)
  }

  const { loading, error, data } = useQuery(GET_USERS, {
    onCompleted: (result) => handleSetOptions(result?.getAllUsers || []),
  });
  const { loading: loadingCountry, error: errorSelectedCountry, data: selecteUser } = useQuery(GET_USER, {
    variables: {
      id: selectedId
    },
    skip: !selectedId,
  });

  const handleSelectUser = useCallback(async (id: number) => {
    setSelectedId(id)
  }, []);

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
      <Container>
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
      </Container>
  );
}

export default Home;
