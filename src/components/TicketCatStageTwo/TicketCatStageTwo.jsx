import React, { Component } from 'react';
import styles from './TicketCatStageTwo.module.scss';


class TicketCatStageTwo extends Component {
  state = {}
  render() {
    console.log(this.props.data)
    return (
      <h1>Please select one of the following options...</h1>
    );
  }
}

export default TicketCatStageTwo;