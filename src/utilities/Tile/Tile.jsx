import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tile extends Component {
<<<<<<< HEAD:src/components/Tile/Tile.jsx
<<<<<<< HEAD

=======
  // tileData[type].queries    
>>>>>>> 4bd516a0bc46ad7249cc44302555895490b0dcc7
=======
>>>>>>> ddd3c4bf8cbf03750392b2da53dab204fbb5643f:src/utilities/Tile/Tile.jsx
  render() {
    const { data, handleClick } = this.props;
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
