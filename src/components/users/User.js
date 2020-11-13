import React, { Component } from 'react';
import { PageTitle } from '../layout/PageTitle';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  render() {
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
    } = this.props.user;

    const { loading, repos } = this.props;

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
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    role='presentation'
                  >
                    <title>c-check</title>
                    <g fill='#00AA5E'>
                      <path
                        d='M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z'
                        fill='#00AA5E'
                      ></path>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    role='presentation'
                  >
                    <title>c-remove</title>
                    <g fill='#FF5252'>
                      <path
                        d='M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z'
                        fill='#FF5252'
                      ></path>
                    </g>
                  </svg>
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
  }
}

export default User;
