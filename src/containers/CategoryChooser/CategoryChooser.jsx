import React, { Component } from 'react';
// import './CategoryChooser.css';
import TicketCatStageOne from '../../components/TicketCatStageOne';
import TicketCatStageTwo from '../../components/TicketCatStageTwo';
import TicketCatStageThree from '../../components/TicketCatStageThree';

class CategoryChooser extends Component {
  render() {
      return (
    <>
    <TicketCatStageOne />
    <TicketCatStageTwo />
    <TicketCatStageThree />
    </>
      )
  }
}
export default CategoryChooser;