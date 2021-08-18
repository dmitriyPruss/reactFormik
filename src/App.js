import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';
import LoginAccount from './components/LoginAccount';
import classNames from 'classnames';
import styles from './App.module.scss';

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
    const buttonNavClass = classNames(styles.buttonView, styles.buttonNav);

    const { isCreateAccount } = this.state;

    return (
      <Router>
        <ul className={styles.navContainer}>
          <li>
            <a href='https://www.squadhelp.com/'>
              <img
                width={190}
                src={
                  'https://www.squadhelp.com/blog/wp-content/uploads/2018/04/Squadhelp_logo_white-transparent.png'
                }
              />
            </a>
          </li>
          <li className={buttonNavClass} onClick={this.clickHandler}>
            {isCreateAccount ? (
              <Link to={'/create'}>Login</Link>
            ) : (
              <Link to={'/login'}>Signup</Link>
            )}
          </li>
        </ul>
        <Switch>
          {isCreateAccount ? (
            <Route>
              <CreateAccount />
            </Route>
          ) : (
            <Route>
              <LoginAccount />
            </Route>
          )}
        </Switch>
      </Router>
    );
  }
}

export default App;
