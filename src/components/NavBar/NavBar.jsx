import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Router, Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <>
        <nav className={styles.navbar}>
          <h1>Nav Bar</h1>
          <div className="menu">
            <Link to="/">
              <button className="menu-btn">Login</button>
            </Link>
            {/* <Link to="dashboard">
              <button className="menu-btn">Dashboard</button>
            </Link>
            <Link to="ticket">
              <button className="menu-btn">Ticket</button>
            </Link> */}
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
console.log(styles, Router);
