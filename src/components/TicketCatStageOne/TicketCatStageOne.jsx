import React, { Component } from "react";
import styles from "./TicketCatStageOne.module.scss";
import Tile from "../Tile";

class TicketCatStageOne extends Component {
  state = {};
  render() {
    return (
      <div className={styles.stageOne}>
        <section className={styles.tileParent}>
          {Object.entries(this.props.data).map((data) => {
            const selector = data[0];
            return (
              <Tile
                key={data[1].id}
                selector={selector}
                data={data[1]}
                handleClick={() => this.props.tileClick(selector)}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default TicketCatStageOne;
