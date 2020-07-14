import React, { Component } from "react";
import styles from'./CategoryChooser.module.scss';
import TicketCatStageOne from "./TicketCatStageOne";
import TicketCatStageTwo from "./TicketCatStageTwo";
import TicketCatStageThree from "./TicketCatStageThree";
import CreateTicket from "./CreateTicket";
import NavBar from '../../components/NavBar';

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
    selector: []
  };

  optionClick = (selector) => {
    this.setState({
      stage: this.state.stage + 1,
      selector: [...this.state.selector, selector]
    });
  };

  getCategory() {
    if (this.state.stage === 0) {
      return (
        <>
          <h2>What is your query regarding?</h2>
          <TicketCatStageOne data={this.tileData} optionClick={this.optionClick} />
        </>
      );
    } else if (this.state.stage === 1) {
      return (
        <>
        <h2>Please select one of the following options...</h2>
        <TicketCatStageTwo
          queries={this.tileData[this.state.selector[0]].queries}
          optionClick={this.optionClick}
        />
        </>
      );
    } else if (this.state.stage === 2) {
      return <TicketCatStageThree optionClick={(event) => {
        console.log(event.target.value);
        this.setState({ stage: this.state.stage + 1, finalChoice: event.target.value })}} />;
    } else if (this.state.stage === 3) {
      return this.state.finalChoice === 'FAQs' ? <p>FAQs</p> : <CreateTicket choices={this.state.selector} />;
    }
  }

  render() {
    console.log(this.state);
    return (
      <section className={styles.categoryChooser}>
        <NavBar />
        {this.getCategory()}
      </section>
    );
  }
}
export default CategoryChooser;
