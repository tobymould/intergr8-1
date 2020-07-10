import React, { Component } from "react";
import styles from "./CreateTicket.module.scss";
// import TicketTile from '../../TicketingDashboard/TicketColumns/Column/TicketTile/TicketTile';
import NavBar from '../../NavBar';

class CreateTicket extends Component {
  // state = {
  //   beenClicked: false,
  // };

  // toggleClicked = (e) => {
  //   e.preventDefault();
  //   this.setState({ beenClicked: !this.state.beenClicked }
  //   )
  // }

  render() {
    // const display = this.state.beenClicked ? (
    //   <TicketTile />
    // ) : null;

    return (
      <>
        <NavBar />
        <div className={styles.backGround}>
          <section className={styles.topField}>
            <p className={styles.topBanner}>New Ticket +</p>
            <p>Intergr8HRM</p>
          </section>
          <section>
            <form action="" className={styles.formCreateTicket}>
              <label For="mainCategory">
                Select category
                <select name="" id="mainCategory" o>
                  <option value="L&D">L&D</option>
                  <option value="Payroll">Payroll</option>
                  <option value="General HR">General HR</option>
                  <option value="Recruitment">Recruitment</option>
                  <option value="Health & Safety">Health & Safety</option>
                </select>
              </label>
              <label For="subCategory">
                Sub-category
                <select name="" id="subCategory">
                  <option value="CPD">CPD</option>
                  <option value="b">b</option>
                </select>
              </label>
              {/* <label For="subSubCategory">Sub-Sub-category
              <select name="" id="subSubCategory">
                  <option value="Training Support Request">Training Support Request</option>
                  <option value="$$">$$</option>
                </select>
              </label> */}
              <label For="">
                Description
                <textarea placeholder="Type here..."></textarea>
              </label>
              <button
                className={styles.btnCreateTicket}
                onClick={this.toggleClicked}
              >
                Create Ticket
              </button>
            </form>
          </section>
        </div>
        {/* {display} */}
      </>
    );
  }
}

export default CreateTicket;
