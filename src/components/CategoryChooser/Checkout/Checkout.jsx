import React, { Component } from 'react';
import styles from './Checkout.module.scss';

class Checkout extends Component {
  state = {  }
  render() { 
    return ( 
        <>
        <button className={styles.button} onClick={this.props.optionClick}>FAQs</button>
        <button className={styles.button} onClick={this.props.optionClick}>Create Ticket</button>
        </>
     );
  }
}
 
export default Checkout;