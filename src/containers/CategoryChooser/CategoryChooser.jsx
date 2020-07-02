import React, { Component } from 'react';
// import './CategoryChooser.css';
import TicketCatStageOne from '../../components/TicketCatStageOne';
import TicketCatStageTwo from '../../components/TicketCatStageTwo';
import TicketCatStageThree from '../../components/TicketCatStageThree';

class CategoryChooser extends Component {
  tileData = {
    payroll: {
      queries: [
        "I need to update my tax code", "What is my payroll number?", "Incorrect Payment"
      ],
      icon: "pound-sign",
      id: 1,
      title: "Payroll"
    },
    generalHR: {
      queries: [
        "I have an issue with a colleague", "Clarification of my job description", "I have a query on holiday entitlement"
      ],
      icon: "network-wired",
      id: 2,
      title: "General HR"
    },
    healthandsafety: {
      queries: [
        "I want to report a healthy and safety hazard", "What health and safety policies are in place", "First aid training enquiry"
      ],
      icon: "medkit",
      id: 3,
      title: "Health & Safety"
    },
    landd: {
      queries: [
        "Enquire about upcoming course", "When is my annual appraisal", "What are my set targets for this month"
      ],
      icon: "book-open",
      id: 4,
      title: "L&D"
    },
    recruitment: {
      queries: [
        "I’d like to apply for an internal post", "Application process", "I would like a reference"
      ],
      icon: "users",
      id: 5,
      title: "Recruitment"
    }
  }

  state = {
    stage: 1
  }

  tileClick = (selector) => {
    console.log(this.tileData[selector]);
    console.log(selector);
    // IN here you have everything you need to move to the next step on a click
    /// (You'll need to set State)
  }

  render() {
    // If you're on stage one, render stage 1
    return (
      <>
        <TicketCatStageOne data={this.tileData} tileClick={this.tileClick}/>
        <TicketCatStageTwo />
        <TicketCatStageThree />
      </>
    )
  }
}
export default CategoryChooser;