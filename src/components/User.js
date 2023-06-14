import PropTypes from 'prop-types';

const User = ({ user }) => (
  <li>
    <h1>{user.name}</h1>
  </li>
);

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default User;
