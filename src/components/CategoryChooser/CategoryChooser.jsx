import React, { Component } from "react";
import styles from "./CategoryChooser.module.scss";
import TicketCatstage1 from "./TicketCatstage1";
import TicketCatstage2 from "./TicketCatstage2";
import TicketCatstage3 from "./TicketCatstage3";
import CreateTicket from "./CreateTicket";

class CategoryChooser extends Component {
  render() {
    return <>
      <TicketCatstage1/>
      <TicketCatstage2/>
      <TicketCatstage3/>
      <CreateTicket/>
    </>;
  }
}

export default CategoryChooser;
console.log(styles);
