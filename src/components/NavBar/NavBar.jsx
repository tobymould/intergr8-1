import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/intergr8-logo-transparent-black-no-tagline.png';


class NavBar extends Component {
  state = {
    navOpen: false
  }

  get navItems() {
    return [
      { title: '[View Ticket]',
        link: "/viewticket"
      },{
        title: 'Dashboard',
        link: '/dashboard'
      },{
        title: 'Ticket',
        link: '/ticket'
      },{
        title: 'Users',
        link: '/superuser'
      }
      ,{
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
    return this.state.navOpen ? styles.displayMobileNav : styles.hideMobileNav;
  }

  toggleNavIcon = () => {
    return this.state.navOpen ? "arrow-right" : "bars";
  }

renderNav = () => this.navItems.map((item, index) => <Link key={index} to={item.link}><h3>{item.title}</h3></Link>) // own components?

  render() {
    return (
      <>
        <nav className={styles.navbar}>
          {/* <h1>Nav Bar</h1> */}
          <img src={logo} alt="intergr8 logo" />
          <div>
            <div className={this.displayNav()}>
              {this.renderNav()}
            </div>
            <h3 className={styles.burger}>
              <FontAwesomeIcon onClick={this.toggleNav} icon={this.toggleNavIcon()} />
            </h3>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
