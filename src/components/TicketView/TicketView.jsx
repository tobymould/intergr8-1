import React, { Component } from 'react';
import styles from './TicketView.module.scss';
import olly from './olly.jpg';

class TicketView extends Component {
    constructor() {
      super();
      this.creationDate = new Date();
    }
    // Three priority levels: 1,2,3.

    state = {
        priority: 1,
        manualOverRide: false,
    }        
    
    hoursFromCreation = () => {
        const today = new Date();
        const milliseconds = Math.abs(today - this.creationDate);
        const hours = milliseconds / 36e5;
            return hours;
        //  return 36;
    }
    
    automaticUpdateState = () => {
        if (!this.state.manualOverRide) {
        if (this.hoursFromCreation() > 48 && this.state.priority !== 3) {
            this.setState({priority: 3,})
            } else if (this.hoursFromCreation() > 24 && this.state.priority !== 2) {
                this.setState({priority: 2,})
            } 
        }
        }
        
    manualUpdateState = (newPriority) => {
        // if (this.state.manualOverRide){
        this.setState(
            {
            priority: newPriority,
            manualOverRide: true,
            }
            )
        // }
    }

    setColour = () => {
        if (this.state.priority === 3) {
        return styles.red
        } else if (this.state.priority === 2) {
        return styles.amber
        } else {
            return styles.green
        }
    }
    
        render() {

        this.automaticUpdateState()

    return (
        <>
        <article>
            <section className={styles.ticketTop}>
              <div className={styles.ticketHeader}>
                <h2>Title</h2>
                <h3>Category</h3>
                <h3>Assigned User</h3>
            </div>
            <div>
                <p>Ticket ID</p>
                <div className={`${styles.circle} ${this.setColour()}`}></div>
              </div>
            </section>

            <div className={styles.messageContainer}>

                <section>
                    <img src={olly} alt="Employee pic"/>
                    <div className={styles.messageContent}>
                        <div className={styles.nameAndDate}>
                            <h3>Ticket and Employee name</h3>
                            <p>Date and time</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam maxime sit. At est magnam voluptates, minus iusto sit inventore nisi illum laudantium sed in ullam, vitae rerum beatae officia?</p>
                    </div>
                </section>

                <section>
                <div className={styles.messageContent}>
                <div  className={styles.nameAndDate}>
                    <h3>Ticket and Employee name</h3>
                    <p>Date and time</p>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam maxime sit. At est magnam voluptates, minus iusto sit inventore nisi illum laudantium sed in ullam, vitae rerum beatae officia?</p>
                </div>
                    <img src={olly} alt="HR person pic"/>
                </section>

                <section>
                <div className={styles.messageContent}>
                    <div className={styles.nameAndDate}>
                    <h3>Ticket and HR person name</h3>
                    <p>Date and time</p>
                    </div>
                    <textarea/>
                    <button>Send</button>
                </div>
                    <img src={olly} alt="HR person pic"/>
                </section>
            </div>
        </article>
        </>
    )
    } 

}

export default TicketView;