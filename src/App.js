import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    title: 'GitHub Finder',
    pageTitle: 'GitHub Finder',
    searchResults: 'Search results for ',
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
      pageTitle: `${this.state.title} – ${this.state.searchResults} "${query}"`,
      query: `${query}"`,
      alert: null,
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
      pageTitle,
      query,
      searchResults,
    } = this.state;

    return (
      <div className='App'>
        <Navbar
          title={title}
          pageTitle={pageTitle}
          searchResults={searchResults}
          query={query}
          showSubtitle={users.length > 0 ? true : false}
        />
        <div className='container'>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Alert alert={this.state.alert} />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
