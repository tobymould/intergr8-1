import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import { Router, Link } from '@reach/router';

class NavBar extends Component {
  state = {};
  render() {
    return (
      <>
        <nav>
          <h1>Nav Bar</h1>
          <div className="menu">
            <button className="menu-btn">Menu</button>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
