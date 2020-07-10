import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class NavBar extends Component {
  state = {
    navOpen: false
  }

  get navItems() {
    return [
      { title: '[View Ticket]',
        link: "/viewticket"
      },{
        title: '[Create Ticket]',
        link: "/createticket"
      },{
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

  toggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen,
    })
  }

  displayNav = () => {
    return this.state.navOpen ? styles.displayNav : styles.hideNav;
  }

renderNav = () => this.navItems.map(item =>  <Link to={item.link}><h3>{item.title}</h3></Link>) // own components?

  render() {
    return (
      <>
        <nav className={styles.navbar}>
          <h1 className={styles.navLogo}>Nav Bar</h1>
          <div>
            <div className={this.displayNav()}>
              {this.renderNav()}
            </div>
            <h3 className={styles.burger}>
              <FontAwesomeIcon onClick={this.toggleNav} icon="bars" />
            </h3>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
