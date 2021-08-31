import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import LoginAccount from './components/LoginAccount';
import Header from './components/Header';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isCreateAccount: true,
    };
  }

  clickHandler = e => {
    this.setState(state => ({
      isCreateAccount: !state.isCreateAccount,
    }));
  };

  render () {
    return (
      <Router>
        <Header
          isCreateAccount={this.state.isCreateAccount}
          clickHandler={this.clickHandler}
        />
        <Switch>
          <Route path='/create'>
            <CreateAccount />
          </Route>
          <Route path='/login'>
            <LoginAccount />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
