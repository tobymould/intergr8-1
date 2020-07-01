import React, { Component } from "react";
import styles from "./Tile.module.scss";

class Tile extends Component {
  tiledata = {
    titles: [
      {
        title: "Payroll",
        icon: "Icon",
      },
      {
        title: "Holiday",
        icon: "Icon",
      },
      {
        title: "Health & Safety",
        icon: "Icon",
      },
      {
        title: "L&D",
        icon: "Icon",
      },
      {
        title: "Recruitment",
        icon: "Icon",
      },
    ],
  };

  render() {
    return (
      <>
        {this.tiledata.titles.map((titleObj) => (
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
