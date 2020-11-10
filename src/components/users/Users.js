import React from 'react';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = (props) => {
  // const { loading, users } = this.props;

  console.log(props.loading);

  return (
    <>
      {props.loading ? (
        <Spinner />
      ) : (
        <div style={userGridStyles}>
          {props.users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
};

const userGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Users;
