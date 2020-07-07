import React, { Component } from "react";
import styles from "./CreateTicket.module.scss";

class CreateTicket extends Component {
  render() {
    return (
      <>
        <h2>New Ticket +</h2>
        <h2>Integr8HR</h2>
        <section>
          <form action="">
            <label For="">
              Select category
              <select name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </label>
            <label For="">
              sub-category
              <select name="" id="">
                <option value="a">a</option>
                <option value="b">b</option>
              </select>
            </label>
            <label For="">
              Description
              <textarea></textarea>
            </label>
            <input type="submit" value="submit" />
          </form>
        </section>
      </>
    );
  }
}
<<<<<<< HEAD

export default CreateTicket;
=======
export default CreateTicket;
console.log(styles);
>>>>>>> dff8160d9175863ed1d5a7383fdb9c91b4d10a93
