import React, { Component } from 'react';
import styles from './TicketCatStageOne.module.scss';
import Tile from '../Tile'

class TicketCatStageOne extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>What is your query regarding?</h1>
      <section className={styles.tileParent}>
        {Object.entries(this.props.data).map((data) => {
          return <Tile 
            key={data[1].id} 
            selector={data[0]} 
            data={data[1]}
            handleClick={() => this.props.tileClick(data[0])}
          />
        })}
      </section>
      </>
     );
  }
}
 
export default TicketCatStageOne;