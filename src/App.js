import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageTitle } from './components/layout/PageTitle';

import About from './components/pages/About';
import Users from './components/users/Users';
import User from './components/users/User';
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import './App.css';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [alert, setAlert] = useState(null);

  const searchUsers = async (query) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUsers(res.data.items);
    setLoading(false);
    setQuery(query);
    setAlert(null);
  };

  // Get a single GitHub user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };

  // Get user's repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort==created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set Alert
  const setAlertMsg = (msg, type) => {
    setAlert({ msg: msg, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };

  return (
    <Router>
      <div className='App'>
        <Navbar
          title='GitHub Finder'
          query={query}
          showSubtitle={users.length > 0 ? true : false}
        />
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <PageTitle title='GitHub Finder' />
                  <Search
                    searchUsers={searchUsers}
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    setAlert={setAlertMsg}
                  />
                  <Alert alert={alert} />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />

            <Route
              exact
              path='/about'
              render={(props) => (
                <Fragment>
                  <PageTitle title='About this app' />
                  <About />
                </Fragment>
              )}
            />

            {/* <Route exact path='/about' component={About} /> */}

            <Route
              exact
              path='/user/:login'
              render={(props) => (
                <Fragment>
                  <PageTitle title='User info' />
                  <User
                    {...props}
                    getUser={getUser}
                    getUserRepos={getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                </Fragment>
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
