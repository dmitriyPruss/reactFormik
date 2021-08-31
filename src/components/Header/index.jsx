import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.scss';

function Header (props) {
  const { isCreateAccount, clickHandler } = props;

  const buttonNavClass = classNames(styles.buttonView, styles.buttonNav);

  return (
    <nav>
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
        <li className={buttonNavClass} onClick={clickHandler}>
          {isCreateAccount ? (
            <Link to={'/login'}>Login</Link>
          ) : (
            <Link to={'/create'}>Signup</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Header;
