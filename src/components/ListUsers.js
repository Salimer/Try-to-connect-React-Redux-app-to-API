import { useSelector } from 'react-redux';
import User from './User';

const ListUsers = () => {
  const { users, isLoading, error } = useSelector((store) => store.users);
  if (error !== undefined) {
    return (
      <div>
        Something went wrong:
        {error}
      </div>
    );
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <ul>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default ListUsers;
