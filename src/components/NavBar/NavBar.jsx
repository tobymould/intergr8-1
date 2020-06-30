import React, { Component } from 'react';
import styles from './NavBar.module.scss';

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
          <>
            <nav>
              <h1>Ticketing Dashboard</h1>
              <div className="menu">
                <button className="menu-btn">Menu</button>
              </div>
            </nav>
          </>
        );
    }
}

export default NavBar ;
