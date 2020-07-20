import React, { Component } from 'react';
import styles from './FAQs.module.scss';

class FAQs extends Component {
  state = {  }
  render() { 
    return ( 
        <>
          <section class={styles.faqs}>
            <h2>FAQ data will be displayed for the following:</h2>
              <h3>Category: {this.props.choices[0]}</h3>
              <h3>Sub-category: {this.props.choices[1]}</h3>
          </section>
        </>
     );
  }
}
 
export default FAQs;