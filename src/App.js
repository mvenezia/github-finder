import React, { Component, Fragment } from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/layout/About'
import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  searchUsers = async userSearch => {
    this.setState({ loading: true })

    const res = await axios.get(`https://api.github.com/search/users?q=${userSearch}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID
    }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  )
    this.setState({ users: res.data.items, loading: false })
  }

  clearUsers = () => {
    this.setState({ users: [] })
  }

  shouldShowClear = () => {
    return (this.state.users.length > 0)
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type }})
    setTimeout(() => {this.setState({ alert: null })}, 5000)
  }
  
  render() {
    const {
      loading,
      users
    } = this.state

    return (
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Alert alert={this.state.alert} />
                <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.shouldShowClear()} setAlert={this.setAlert} />
                <Users loading={loading} users={users} />
              </Fragment>
            )}
            />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
