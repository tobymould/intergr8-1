import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { tileData } from "../../data/TicketCatData";

class Tile extends Component {
  render() {
    return (
      <>
        {tileData.map((titleObj) => (
          <article className={styles.tileStyles}>
            <p>{titleObj.icon}</p>
            <p>{titleObj.title}</p>
          </article>
        ))}
      </>
    );
  }
}

export default Tile;
