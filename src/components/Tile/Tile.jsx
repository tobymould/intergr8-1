import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { tileData } from "../../data/TicketCatData";

class Tile extends Component {
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tile extends Component {



  // tileData[type].queries
    
  render() {
    const { data, selector, handleClick } = this.props;
    return (
      <>
        {tileData.map((titleObj) => (
          <article className={styles.tileStyles}>
            <p className={styles.icon}>{titleObj.icon}</p>
            <p className={styles.catTitle}>{titleObj.title}</p>
          </article>
        ))}
      </>
    );
  }
}

export default Tile;
