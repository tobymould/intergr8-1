import React, { Component } from "react";
import styles from "./Message.module.scss";
import olly from "../olly.jpg";

class Message extends Component {
  // {/* <section>
  // <div className={styles.messageContent}>
  // <div  className={styles.nameAndDate}>
  //     <h3>Ticket and Employee name</h3>
  //     <p>Date and time</p>
  // </div>
  // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam maxime sit. At est magnam voluptates, minus iusto sit inventore nisi illum laudantium sed in ullam, vitae rerum beatae officia?</p>
  // </div>
  //     <img src={olly} alt="HR person pic"/>
  // </section> */}

  typeOfMessage() {
    const pic = <img src={olly} alt="Employee pic" />;
    const message = (
      <div className={styles.messageContent}>
        <div className={styles.nameAndDate}>
          <h3>Employee Name</h3>
          <p>Date and time</p>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam maxime sit. At est magnam
          voluptates, minus iusto sit inventore nisi illum laudantium sed in ullam, vitae rerum
          beatae officia?
        </p>
      </div>
    );

    if (this.props.userType === "Employee") {
      return (
        <>
          {pic} {message}
        </>
      );
    } else {
      return (
        <>
          {message} {pic}
        </>
      );
    }
  }

  render() {
    return <section className={styles.message}>{this.typeOfMessage()}</section>;
  }
}

export default Message;
