import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import User from './User';
import { fetchUsers } from '../store/users/usersSlice';

const ListUsers = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
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
