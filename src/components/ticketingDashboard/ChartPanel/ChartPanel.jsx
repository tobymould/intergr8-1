import React, { Component } from "react";
import Chart from "./Chart";
import styles from "./ChartPanel.module.scss";

class ChartPanel extends Component {
  calculateStrokeDash = (percentage) => (377 / 100) * percentage; // 377 is the perimeter of the charts, see Niall or Phil.

  render() {
    const {
      percentInProgressTickets,
      percentUserInProgressTickets,
      percentUnassignedTickets,
    } = this.props;

    return (
      <div className={styles.chartPanel}>
        <section>
          <article className="all-in-progess">
            <h3>All in Progress</h3>
            <Chart
              strokeDash={this.calculateStrokeDash(percentInProgressTickets)}
            />
          </article>
          <article className="own-in-progress">
            <h3>Own in Progress</h3>
            <Chart
              strokeDash={this.calculateStrokeDash(
                percentUserInProgressTickets
              )}
            />
          </article>
          <article className="unassigned">
            <h3>Unassigned</h3>
            <Chart
              strokeDash={this.calculateStrokeDash(percentUnassignedTickets)}
            />
          </article>
        </section>
      </div>
    );
  }
}

export default ChartPanel;
