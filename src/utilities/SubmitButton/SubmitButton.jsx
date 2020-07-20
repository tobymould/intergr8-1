import React, { Component } from 'react';
import styles from './SubmitButton.module.scss';

class SubmitButton extends Component {
  render() {
    return <input type="submit" value={this.props.text} className={styles.button}></input>;
  }
}

export default SubmitButton;
