import React, { Component } from 'react';
import styles from './TicketColumns.module.scss';
import Column from './Column';

class TicketColumns extends Component {
    state = {  }
    render() { 
        return (  
          <section className={styles.TicketColumns}>
          
              <Column filter={true} title={'Tickets to assign'}/>

              <Column filter={true} title={'My tickets'} />
            
              <Column filter={false} title={'Other agents:'} />
          
          </section>
        );
    }
}

export default TicketColumns ;
