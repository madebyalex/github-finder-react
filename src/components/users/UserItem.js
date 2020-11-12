import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
        <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
          Show info
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
