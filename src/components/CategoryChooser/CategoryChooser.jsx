import React, { Component } from "react";
import styles from "./CategoryChooser.module.scss";
import TicketCatStageOne from "./TicketCatStageOne";
import TicketCatStageTwo from "./TicketCatStageTwo";
import TicketCatStageThree from "./TicketCatStageThree";
import CreateTicket from "./CreateTicket";
import FAQs from "./FAQs";
import Button from "../../utilities/Button";
import { firestore } from "../../firebase";


class CategoryChooser extends Component {
  state = {
    stage: 0,
    firstTile: "",
    selector: [],
    categories: {},
  };

  componentDidMount() {
    firestore
      .collection('categories')
      .get()
      .then((snapshot) => {
        snapshot.docs
          .forEach((doc) => {
            this.setState({
              categories: { ...this.state.categories, [doc.id]: doc.data() }
            })
          })
      })
  }


  noSubCategories = (selector, count) => {
    let num = this.state.stage > 2 ? this.state.stage + count : this.state.stage + count * 2;
    let newSelector;
    if (count < 0) {
      newSelector = this.state.stage === 2 ? "" : this.state.selector;
    } else {
      newSelector = this.state.stage > 2 ? this.state.selector : [selector, ''];
    }
    this.setState({
      stage: num,
      selector: newSelector
    })
  }

  optionClick = (selector, count) => {
    let newSelector;
    let category = typeof selector === 'string' ? selector : selector[0];
    count = count ? count : 1;
    if (this.state.categories[category] && this.state.categories[category].queries.length === 0) return this.noSubCategories(selector, count);
    if (count < 0) {
      newSelector = this.state.stage > 2 ? this.state.selector : this.state.selector.slice(0, this.state.selector.length - 1);
    } else {
      newSelector = [...this.state.selector, selector];
    }
    this.setState({
      stage: this.state.stage + count,
      selector: newSelector
    });
  };

  goBack = () => {
    //onclick of goback decrement the stage
    if (this.state.stage > 0) return <Button className={styles.goBack} text={'Go back'} logic={() => { this.optionClick(this.state.selector, -1) }} />
  }

  getCategory() {
    // const {stage, selector, finalChoice } = this.state;
    if (this.state.stage === 0) {
      return (
        <>
          <h2>What is your query regarding?</h2>
          <TicketCatStageOne data={this.state.categories} optionClick={this.optionClick} />
        </>
      );
    } else if (this.state.stage === 1) {
      return (
        <>
          <h2>Please select one of the following options...</h2>
          <TicketCatStageTwo
            queries={this.state.categories[this.state.selector[0]].queries}
            optionClick={this.optionClick}
          />
        </>
      );
    } else if (this.state.stage === 2) {
      return <TicketCatStageThree optionClick={(event) => {
        this.setState({ finalChoice: event.target.value, stage: this.state.stage + 1 })
      }} />;
    } else if (this.state.stage === 3) {
      return this.state.finalChoice === 'FAQs' ? <FAQs choices={this.state.selector} /> : <CreateTicket choices={this.state.selector} user={this.props.user} />;
    }
  }

  render() {
    return (
      <>
        <div className={styles.catalogueWrapper}>
          <section className={styles.categoryChooser}>
            {this.getCategory()}
            <div className={styles.backContainer}>
              {this.goBack()}
            </div>
          </section>
        </div>
      </>
    );
  }
}
export default CategoryChooser;
