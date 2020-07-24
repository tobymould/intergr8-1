import React, { Component } from "react";
import styles from "./Column.module.scss";
import DropDown from "../../../../utilities/DropDown";
import TicketTile from "./TicketTile";

class Column extends Component {
  state = {
    filteredTickets: [],
    filtering: false,
  };

  renderFilter() {
    return <DropDown filterOptions={["Newest", "Oldest"]} />;
  }

  // filterByUser = (e) => {
  //   if (!this.state.filtering) this.setState({filtering: true})
  //   const ticketsCopy = this.props.allTickets;
  //   const filteredTickets = ticketsCopy.filter((obj) => {
  //     return obj.category === e.target.value;
  //   });
  //   this.setState({
  //     filteredTickets,
  //   });
  // };

  convertDataFormat = (date) => {
    let arr = date.split('');
    [arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8], arr[9]] = [arr[6], arr[7], arr[8], arr[9], arr[2], arr[3], arr[4], arr[5], arr[0], arr[1]];
    return arr.join('');
  }

  sortOptions = (e) => {
    if (!this.state.filtering) this.setState({filtering: true})
    const orderData = this.state.filtering ? [...this.state.filteredTickets] : [...this.props.allTickets];
      if (e.target.value === "Newest") {
        orderData.sort((a, b) => new Date(this.convertDataFormat(b.createdAtDate)) - new Date(this.convertDataFormat(a.createdAtDate)));
      } else if (e.target.value === "Oldest") {
        orderData.sort((a, b) => new Date(this.convertDataFormat(a.createdAtDate)) - new Date(this.convertDataFormat(b.createdAtDate)));
      } 
    this.setState({
      filteredTickets: orderData,
    });
  };

  render() {
    const tickets = this.state.filtering ? this.state.filteredTickets : this.props.allTickets;
    return (
      <>
        <article className={styles.TicketColumn}>
            <h3>{this.props.title}</h3>
          <div className={styles.topOfColumn}>
            <div onChange={this.sortOptions}>{this.renderFilter()}</div>
          </div>
          <section className={styles.ticketTileSection} title={this.props.title}>
            <TicketTile data={tickets} userRole={this.props.userRole} user={this.props.user}/>
          </section>
        </article>
      </>
    );
  }
}

export default Column;
