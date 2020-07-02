import React, { Component } from "react";
import styles from "./LogInBox.module.scss";
class LogInBox extends Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
        <form>
          <section>
            <input class="username" type="text" name="username" placeholder="Username" />
            <input class="password" type="password" name="password" placeholder="Password" />
            <input class="submit" type="submit" value="Log </input>In" />
          </section>
        </form>
      </div>);
  }
}

export default LogInBox;






