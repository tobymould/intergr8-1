import React, { Component } from 'react';
import styles from './Checkout.module.scss';

class Checkout extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <p className={styles.buttonCheckout} value={'FAQs'} onClick={this.props.optionClick}>FAQs</p>
        <p className={styles.buttonCheckout} value={'Create Ticket'} onClick={this.props.optionClick}>Create Ticket</p>
      </>
     );
  }
}
 
export default Checkout;