import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Router, Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class NavBar extends Component {

  get navItems() {
    return [
      {
        title: 'Dashboard',
        link: '/dashboard'
      },{
        title: 'Ticket',
        link: '/ticket'
      },{
        title: 'Logout',
        link: '/'
      }
    ]
  }

renderNav = () => this.navItems.map(item =>  <Link to={item.link}><h3>{item.title}</h3></Link>) // own components?

  render() {
    return (
      <>
        <nav className={styles.navbar}>
          <h1>Nav Bar</h1>
          <div>
            <div className={styles.links}>
              {this.renderNav()}
            </div>
            <h3 className={styles.burger}>
              <FontAwesomeIcon icon="bars" />
            </h3>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
console.log(styles, Router);
