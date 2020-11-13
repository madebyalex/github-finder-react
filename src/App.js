import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { PageTitle } from './components/layout/PageTitle';

import About from './components/pages/About';
import User from './components/users/User';

// import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    query: '',
    alert: null,
  };

  searchUsers = async (query) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false,
      // pageTitle: `${this.state.title} – ${this.state.searchResults} "${query}"`,
      query: `${query}"`,
      alert: null,
    });
  };

  // Get a single GitHub user
  getUser = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      user: res.data,
      loading: false,
    });
  };

  // Get user's repos
  getUserRepos = async (username) => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort==created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  // Clear users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false, pageTitle: this.state.title });
  };

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const { users, loading, query, user, repos } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar
            title='GitHub Finder'
            // pageTitle={pageTitle}
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
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />

                    <Users loading={loading} users={users} />
                    <Alert alert={this.state.alert} />
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
                      getUser={this.getUser}
                      getUserRepos={this.getUserRepos}
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
  }
}

export default App;
