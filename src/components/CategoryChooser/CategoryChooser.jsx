import React, { Component } from "react";
import styles from "./CategoryChooser.module.scss";
import TicketCatStageOne from "./TicketCatStageOne";
import TicketCatStageTwo from "./TicketCatStageTwo";
import TicketCatStageThree from "./TicketCatStageThree";
import NavBar from "../../components/NavBar";

class CategoryChooser extends Component {
  tileData = {
    payroll: {
      queries: ["General Pay Query", "Benefit Query ", "P60/P45 Request"],
      icon: "pound-sign",
      id: 1,
      title: "Pay & Benefits",
    },
    generalHR: {
      queries: [
        " Probation/Induction",
        " Leave/Holidays",
        " Sickness & Absence",
        "Disciplinary & Grievance",
        "Performance Management",
        "Data Protection/GDPR",
        "Return to Work",
        "Wellbeing",
        "Flexible Working",
        "My Appraisal",
        "Maternity/Paternity",
        "Terminations",
        "Line Manager HR Support ",
        "Other HR Query" 
      ],
      icon: "network-wired",
      id: 2,
      title: "HR",
    },
    healthandsafety: {
      queries: [],
      icon: "medkit",
      id: 3,
      title: "Health & Safety",
    },
    landd: {
      queries: [
        "My CPD",
        "Line Manager Support"
      ],
      icon: "book-open",
      id: 4,
      title: "L&D",
    },
    recruitment: {
      queries: [
        "Apply for an External Post",
        "General Recruitment Query",
        "Create a new Role",
        "Line Manager Recruitment Support"
      
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
    if (selector === "healthandsafety") {
      this.setState({
        stage: this.state.stage + 2,
        selector,
      })
    }else {
    this.setState({
      stage: this.state.stage + 1,
      selector,
    });
  }
  };
  optionClick = () => {
    this.setState({
      stage: this.state.stage + 1,
    });
    }
  ;

  getCategory() {
    if (this.state.stage === 0) {
      return (
        <>
          <h1> What is your query regarding?</h1>
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
        <NavBar />
        {this.getCategory()}
      </section>
    );
  }
}
export default CategoryChooser;
