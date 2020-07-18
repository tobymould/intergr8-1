import React, { Component } from "react";
import styles from "./CategoryChooser.module.scss";
import TicketCatStageOne from "./TicketCatStageOne";
import TicketCatStageTwo from "./TicketCatStageTwo";
import TicketCatStageThree from "./TicketCatStageThree";
import NavBar from "../../components/NavBar";
import { firestore } from "../../firebase";


class CategoryChooser extends Component {
  state = {
    stage: 0,
    firstTile: "",
    categories: []
  };

  componentDidMount() {
    firestore
        .collection('categories')
        .get()
        .then((snapshot) => {
          const categories = snapshot.docs
          .map((doc => doc.data()))
          this.setState({ categories })
        })
  }

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
          <TicketCatStageOne data={this.state.categories} tileClick={this.tileClick} />
        </>
      );
    } else if (this.state.stage === 1) {
      return (
        <>
          <h1>Please select one of the following options...</h1>
          <TicketCatStageTwo
            queries={this.state.categories[this.state.selector].queries}
            optionClick={this.optionClick}
          />
        </>
      );
    } else if (this.state.stage === 2) {
      return <TicketCatStageThree />;
    }
  }

  render() {
    return (
      <section className={styles.categoryChooser}>
        <NavBar />
        {this.getCategory()}
      </section>
    );
  }
}
export default CategoryChooser;
