import React, { Component } from 'react';
import styles from './ChartData.module.scss';
import TicketData from '../../data/TicketData';

class ChartData extends Component {

  state = {
    unassignedPercentage: null,
    unnassignedStrokeDash: null,
  }

  countTickets() {
    return TicketData.length;
  }

  countAssignedTickets() {
    return TicketData.filter((ticket) => !ticket.assigned).length;
  }

  calculatePercentUnassigned() {
    const percentage = ((this.countAssignedTickets() / this.countTickets()) * 100);
    this.setState({ 
      unassignedPercentage: percentage
    });
    return percentage;
  }

  calculateStrokeDashArray(percentage) {
    return (377 / 100) * percentage;
  }


  componentDidMount() {
    this.setState({
      unnassignedStrokeDash: this.calculateStrokeDashArray(this.calculatePercentUnassigned())
    });
  }
    render() { 
      
        return (  
          <>
          </>
        );
    }

}

export default ChartData;
