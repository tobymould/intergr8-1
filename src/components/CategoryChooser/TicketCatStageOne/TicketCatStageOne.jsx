import React, { Component } from "react";
import styles from "./TicketCatStageOne.module.scss";
import Tile from "../../../utilities/Tile";

class TicketCatStageOne extends Component {
<<<<<<< HEAD
  state = {  }
  render() { 
    return ( 
      <div>
        <h1>What is your query regarding?</h1>
        <section className={styles.tileParent}>
          {Object.entries(this.props.data).map((data) => {
            return <Tile 
              key={data[1].id} 
              selector={data[0]} 
              data={data[1]}
              handleClick={() => this.props.tileClick(data[0])}
            />
=======
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
>>>>>>> 4bd516a0bc46ad7249cc44302555895490b0dcc7
          })}
        </section>
      </div>
    );
  }
}

export default TicketCatStageOne;
