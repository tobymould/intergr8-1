import React, { Component } from "react";
import styles from "./Column.module.scss";
import DropDown from "../../../../utilities/DropDown";
// import TicketView from "./TicketView";
import TicketTile from "./TicketTile";

class Column extends Component {
  
  
  renderFilter() {
    return this.props.filter ? (
      <DropDown
        filterOptions={["Date: earliest", "Date: latest", "Category"]}
      />
    ) : (
      <p>{}</p>
    );
  }

  filterClicked = (e) => {
    if (e.target.value ==="Date: earliest") {
      //this.data.sort()
      console.log('clicked1');
    } else if (e.target.value ==="Date: latest"){
      console.log('clicked2');
    } else {
      console.log('clicked3')
    }
}

  render() {
    return (
      <>
        <article className={styles.TicketColumn}>
          <div className={styles.topOfColumn}>
            <h3>{this.props.title}</h3>
            <div onChange={this.filterClicked}>{this.renderFilter()}</div>
          </div>
          <section title={this.props.title}>
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
            <TicketTile />
          </section>
        </article>
        {/* <TicketView /> */}
      </>
    );
  }
}

export default Column;
