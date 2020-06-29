import React, { Component } from 'react';
import styles from './Ticket.module.scss';

class Ticket extends Component {
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
            <p>Hello world</p>
            <h2>{this.state.priority}</h2>
            <div className={this.setColour()}></div>
            
        </article>
        </>
    )
    } 

}

export default Ticket;