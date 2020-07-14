import React, { Component } from 'react';
import styles from './LogInBox.module.scss';
import SubmitButton from '../../utilities/SubmitButton';
import logo from '../../assets/intergr8-logo.jpg';
import InputBox from '../../utilities/InputBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LogInBox extends Component {
  render() {
    const { userSignInAttempt, user, emailAddress, password } = this.props;
    console.log(user, emailAddress, password);

    return (
      <section className={styles.logInPage}>
        <div className={styles.logInWrapper}>
          <div className={styles.box}>
            <div className={styles.loginPanel}>
              <div className={styles.logInContent}>
                <div className={styles.logInTitle}>
                  <img src={logo} alt="intergr8HRM" />
                </div>
                <div className={styles.formSection}>
                  {/*  */}
                  {/*  */}
                  <form onSubmit={userSignInAttempt}>
                    <div className={styles.inputWrapper}>
                      <InputBox id="email" type="email" name="email" placeholder="Email" onInput={event => this.setState({ emailAddress: event.target.value })} />
                      <label htmlFor="email">
                        <FontAwesomeIcon icon="user" />
                      </label>
                    </div>
                    <div className={styles.inputWrapper}>
                      <InputBox id="password" type="password" name="password" placeholder="Password" onInput={event => this.setState({ password: event.target.value })} />
                      <label htmlFor="password">
                        <FontAwesomeIcon icon="lock" />
                      </label>
                    </div>
                    <SubmitButton text="Sign In" />
                  </form>
                  {/*  */}
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LogInBox;
