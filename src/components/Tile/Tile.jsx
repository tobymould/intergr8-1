import React, { Component } from "react";
import styles from "./Tile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tile extends Component {
  tiledata = [
      {
        title: "Payroll",
        icon: <FontAwesomeIcon icon={"pound-sign"} />,
        tileId: 1
      },
      {
        title: "General HR",
        icon: <FontAwesomeIcon icon={"network-wired"} />,
        tileId: 2
      },
      {
        title: "Health & Safety",
        icon: <FontAwesomeIcon icon={"medkit"} />,
        tileId: 3
      },
      {
        title: "L&D",
        icon: <FontAwesomeIcon icon={"book-open"} />,
        tileId: 4
      },
      {
        title: "Recruitment",
        icon: <FontAwesomeIcon icon={"users"} />,
        tileId: 5
      },
    ]
    
  render() {
    return (
      <>
        {this.tiledata.map((titleObj) => (
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
