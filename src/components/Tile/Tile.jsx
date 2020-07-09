import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tile extends Component {
<<<<<<< HEAD

=======
  // tileData[type].queries    
>>>>>>> 4bd516a0bc46ad7249cc44302555895490b0dcc7
  render() {
    const { data, selector, handleClick } = this.props;
    return (
      <article className={styles.tileStyles} onClick={handleClick}>
        <p className={styles.icon}>
          <FontAwesomeIcon icon={data.icon} />
        </p>
        <p className={styles.catTitle}>{data.title}</p>
      </article>
    );
  }
}

export default Tile;
