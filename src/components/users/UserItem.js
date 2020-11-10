import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card text-center'>
      <img
        className='round-img'
        style={{ width: '60px' }}
        src={avatar_url}
        alt=''
      />

      <h2>{login}</h2>
      <div>
        <a className='btn btn-dark btn-sm my-1' href={html_url}>
          Show repos
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
