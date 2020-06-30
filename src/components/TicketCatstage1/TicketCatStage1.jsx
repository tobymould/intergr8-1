import React, { Component } from 'react';
import styles from './TicketCatStage1.module.scss';
import Tile from '../Tile'

class TicketCatStage1 extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>Heading</h1>
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      <Tile />
      </>
     );
  }
}
 
export default TicketCatStage1;


