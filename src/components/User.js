import PropTypes from 'prop-types';

const User = ({ user }) => (
  <li>
    <h1>{user.username}</h1>
  </li>
);

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
