import { useSelector } from 'react-redux';
import User from './User';

const ListUsers = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  return (
    <>
      {error === undefined ? (
        isLoading ? (
          <div>loading...</div>
        ) : (
          <ul>
            {users.map((user) => (
              <User key={user.id} user={user} />
            ))}
          </ul>
        )
      ) : (
        <div>{error}</div>
      )}
    </>
  );
};
