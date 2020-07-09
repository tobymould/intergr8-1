import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Tile extends Component {
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
