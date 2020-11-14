import React, { useEffect } from 'react';
import { PageTitle } from '../layout/PageTitle';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import IconCheckmarkCircle from '../icons/IconCheckmarkCircle';
import IconCrossCircle from '../icons/IconCrossCircle';
import Globe from '../icons/globe';
import Notification69 from '../icons/notification-69';

const User = ({ user, loading, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) return <Spinner />;

  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back to search
      </Link>

      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            className='round-img'
            style={{ width: '180px' }}
            alt={name}
          />

          <PageTitle title={`More about ${name}`} />
          <h1>{name}</h1>

          <p className='hireable'>
            Hireable:{' '}
            <span className='hireable-icon'>
              {hireable ? (
                <>
                  {/* <IconCheckmarkCircle color='#00AA5E' /> */}
                  <Notification69 width='1.125rem' fill='#00AA5E' />
                </>
              ) : (
                <>
                  {/* <IconCrossCircle color='#FF5252' /> */}
                  <Globe fill='#FF5252' width='1.125rem' />
                </>
              )}
            </span>
          </p>

          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <>
              <h2>About</h2>
              <p>{bio}</p>
            </>
          )}

          <a href={html_url} className='btn btn-dark my-1'>
            Visit GitHub profile
          </a>

          <ul>
            {login && (
              <li>
                <strong>Username: </strong>
                {login}
              </li>
            )}

            {company && (
              <li>
                <strong>Company: </strong>
                {company}
              </li>
            )}

            {blog && (
              <>
                <li>
                  <strong>Website: </strong>
                  <a href={blog} target='_blank' rel='noreferrer'>
                    {blog}
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>Public repos: {public_repos}</div>
        <div className='badge badge-dark'>Public gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </>
  );
};

User.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  getUser: PropTypes.func.isRequired,
  getUserRepos: PropTypes.func.isRequired,
};

export default User;
