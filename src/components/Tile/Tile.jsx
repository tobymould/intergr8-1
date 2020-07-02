import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tile extends Component {
<<<<<<< HEAD
  // tileData[type].queries    
=======
  // tileData[type].queries

>>>>>>> 556745973bf660f4b0a9013f352c370b969cdcd6
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
