import React, { Component } from 'react';
import styles from './Checkout.module.scss';

class Checkout extends Component {
  state = {  }
  render() { 
    return ( 
        <>
        <button className={styles.checkout}>FAQs</button>
        <button>Create Ticket</button>
        </>
     );
  }
}
 
export default Checkout;