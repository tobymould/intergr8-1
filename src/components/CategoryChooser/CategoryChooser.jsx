import React, { Component } from "react";
import styles from "./CategoryChooser.module.scss";
import TicketCatStageOne from "./TicketCatStageOne";
import TicketCatStageTwo from "./TicketCatStageTwo";
import TicketCatStageThree from "./TicketCatStageThree";
import CreateTicket from "./CreateTicket";
import FAQs from "./FAQs";
import NavBar from '../../components/NavBar';
import Button from "../../utilities/Button";
import tileData from "../../data/tileData";

class CategoryChooser extends Component {
  state = {
    stage: 0,
    firstTile: "",
    selector: []
  };

  noSubCategories = (selector, count) => {
    // if (selector === "Health & Safety") count = 2;

    this.setState({
      stage: this.state.stage + count*2,
      selector: selector
    }) 
  }

  optionClick = (selector, count) => {
    count = count ? count : 1;

    let newSelector =   count < 0 && this.state.stage < 3 ? this.state.selector.slice(0,this.state.selector.length-1) : [...this.state.selector, selector];
    newSelector = this.state.stage === 3 ? this.state.selector : newSelector;

    if (tileData[selector] && tileData[selector].queries.length === 0) return this.noSubCategories(newSelector, count)
    


    this.setState({
      //change stage to receive either +1 or -1
      stage: this.state.stage + count,
      selector: newSelector
    });
    }
  ;

  goBack = () => {
    //onclick of goback decrement the stage

    console.log("The current stage is: " + this.state.stage)
    if (this.state.stage > 0) return <Button className={styles.goBack} text={'Go back'} logic={() => {this.optionClick(this.state.selector, -1)}} />
  }

  getCategory() {
    if (this.state.stage === 0) {
      return (
        <>
          <h2>What is your query regarding?</h2>
          <TicketCatStageOne data={tileData} optionClick={this.optionClick} />
        </>
      );
    } else if (this.state.stage === 1) {
      return (
        <>
        <h2>Please select one of the following options...</h2>
        <TicketCatStageTwo
          queries={tileData[this.state.selector[0]].queries}
          optionClick={this.optionClick}
        />
        </>
      );
    } else if (this.state.stage === 2) {
      return <TicketCatStageThree optionClick={(event) => {
        this.setState({ finalChoice: event.target.value, stage: this.state.stage + 1 })
      }} />;
    } else if (this.state.stage === 3) {
      return this.state.finalChoice === 'FAQs' ? <FAQs choices={this.state.selector} /> : <CreateTicket choices={this.state.selector} />;
    }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <NavBar />
        <section className={styles.categoryChooser}>
          {this.getCategory()}
          <div className={styles.backContainer}>
            {this.goBack()}
          </div>
        </section>
      </>
    );
  }
}
export default CategoryChooser;
