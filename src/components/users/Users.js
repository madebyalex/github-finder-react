import React from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const Users = ({ users, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userGridStyles}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

const userGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
  position: 'relative',
  zIndex: '1',
};

export default Users;
