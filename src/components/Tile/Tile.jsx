import React, { Component } from 'react';
import styles from './Tile.module.scss';

class Tile extends Component {
  state = {  }
  render() { 
    return ( 
      
      <article className={styles.tileStyles}>
        <p>L&D</p>
      </article>
     );
  }
}
 
export default Tile;