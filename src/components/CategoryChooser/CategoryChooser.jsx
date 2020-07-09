import React, { Component } from "react";
import styles from'./CategoryChooser.module.scss';
import TicketCatStageOne from "./TicketCatStageOne";
import TicketCatStageTwo from "./TicketCatStageTwo";
import TicketCatStageThree from "./TicketCatStageThree";

class CategoryChooser extends Component {
  tileData = {
    payroll: {
      queries: ["I need to update my tax code", "What is my payroll number?", "Incorrect Payment"],
      icon: "pound-sign",
      id: 1,
      title: "Payroll",
    },
    generalHR: {
      queries: [
        "I have an issue with a colleague",
        "Clarification of my job description",
        "I have a query on holiday entitlement",
      ],
      icon: "network-wired",
      id: 2,
      title: "General HR",
    },
    healthandsafety: {
      queries: [
        "I want to report a healthy and safety hazard",
        "What health and safety policies are in place",
        "First aid training enquiry",
      ],
      icon: "medkit",
      id: 3,
      title: "Health & Safety",
    },
    landd: {
      queries: [
        "Enquire about upcoming course",
        "When is my annual appraisal",
        "What are my set targets for this month",
      ],
      icon: "book-open",
      id: 4,
      title: "L&D",
    },
    recruitment: {
      queries: [
        "I’d like to apply for an internal post",
        "Application process",
        "I would like a reference",
      ],
      icon: "user-friends",
      id: 5,
      title: "Recruitment",
    },
  };

  state = {
    stage: 0,
    firstTile: "",
  };

  tileClick = (selector) => {
    this.setState({
      stage: this.state.stage + 1,
      selector
    });
  };
  optionClick = () => {
    this.setState({
      stage: this.state.stage + 1,
    });
  };

  getCategory() {
    if (this.state.stage === 0) {
      return (
        <>
          <h1>What is your query regarding?</h1>
          <TicketCatStageOne data={this.tileData} tileClick={this.tileClick} />
        </>
      );
    } else if (this.state.stage === 1) {
      return (
        <>
        <h1>Please select one of the following options...</h1>
        <TicketCatStageTwo
          queries={this.tileData[this.state.selector].queries}
          optionClick={this.optionClick}
        />
        </>
      );
    } else if (this.state.stage === 2) {
      return <TicketCatStageThree />;
    }
  }

  render() {
    console.log(this.state);
    return (
      <section className={styles.categoryChooser}>
        {this.getCategory()}
      </section>
    );
  }
}
export default CategoryChooser;
