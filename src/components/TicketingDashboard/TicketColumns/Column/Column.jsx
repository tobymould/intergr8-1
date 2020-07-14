import React, { Component } from "react";
import styles from "./Column.module.scss";
import DropDown from "../../../../utilities/DropDown";
// import TicketView from "./TicketView";
import TicketTile from "./TicketTile";
import data from "../../../../data/mockTicketOrderData";

class Column extends Component {
  state = {
    tickets: [],
    prioritySorted: [],
  };

  componentDidMount() {
    //get from firebase
    // this.setState({ tickets: data, prioritySorted: filterClicked(data)})
  }

  renderFilter() {
    return this.props.filter ? (
      <DropDown filterOptions={["Newest", "Oldest", "Priority", "Category"]} />
    ) : (
      <p>{}</p>
    );
  }

  filterClicked = (e) => {
    if (e.target.value === "Newest") {
      let newestDates = data.sort((a, b) => new Date(b.createdAtDate) - new Date(a.createdAtDate));
      console.log(newestDates);
    } else if (e.target.value === "Oldest") {
      let oldestDates = data.sort((a, b) => new Date(a.createdAtDate) - new Date(b.createdAtDate));
      console.log(oldestDates);
    } else if (e.target.value === "Priority") {
      const prioritySort = data.sort((a, b) => b.priority - a.priority);
      console.log(prioritySort);
    } else if (e.target.value === "Category ") {
      const categorySort = data.sort((a, b) => b.category - a.category);
      console.log(categorySort);
    }
  };

  render() {
    return (
      <>
        <article className={styles.TicketColumn}>
          <div className={styles.topOfColumn}>
            <h3>{this.props.title}</h3>
            <div onChange={this.filterClicked}>{this.renderFilter()}</div>
          </div>
          <section title={this.props.title}>
            <TicketTile/>
          </section>
        </article>
        {/* <TicketView /> */}
      </>
    );
  }
}

export default Column;
