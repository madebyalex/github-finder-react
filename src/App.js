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
    loading: false,
    title: 'GitHub Finder',
    searchResults: 'Search results for ',
    query: '',
    alert: null,
    user: {},
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

  clearUsers = () => {
    this.setState({ users: [], loading: false, pageTitle: this.state.title });
  };

  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    const {
      users,
      loading,
      title,
      // pageTitle,
      query,
      searchResults,
      user,
    } = this.state;

    return (
      <Router>
        <div className='App'>
          <Navbar
            title={title}
            // pageTitle={pageTitle}
            searchResults={searchResults}
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
                      user={user}
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
