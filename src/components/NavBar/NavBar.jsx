import React, { Component } from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../../assets/intergr8-logo-transparent-black-no-tagline.png';


class NavBar extends Component {
  state = {
    navOpen: false, 
  }

  get navItems() {
    return [
      {
        title: 'Dashboard',
        link: '/dashboard',
        restrictedToRole: 1,
      }, {
        title: 'Catalogue',
        link: '/catalogue',
        restrictedToRole: 1,
      }, {
        title: 'Users',
        link: '/superuser',
        restrictedToRole: 3,
      }
      , {
        title: 'Logout',
        link: '/',
        restrictedToRole: 1,
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

  renderNav = () => {return this.navItems.filter((item, index) => {
    return item.restrictedToRole <= this.props.userRole
  })
    .map((item, index) => {
    const { signOut } = this.props;
    return <Link
      key={index}
      to={item.link}>
      <h3 onClick={item.title === 'Logout' ? signOut : null}>
        {item.title}
      </h3>
    </Link>
  })
  }
   // own components?

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
