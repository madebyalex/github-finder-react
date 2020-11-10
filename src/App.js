import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import './assets/main.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
    title: 'GitHub Finder',
    pageTitle: 'GitHub Finder',
    searchResults: 'Search results for ',
    query: '',
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );

  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers2 = async (query) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${query}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({
      users: res.data.items,
      loading: false,
      pageTitle: `${this.state.title} – ${this.state.searchResults} "${query}"`,
      query: `${query}"`,
    });
  };

  render() {
    return (
      <div className='App'>
        <Navbar
          title={this.state.title}
          pageTitle={this.state.pageTitle}
          searchResults={this.state.searchResults}
          query={this.state.query}
        />
        <div className='container'>
          <Search searchUsers={this.searchUsers2} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
