import React, { Component } from 'react';
import styles from './Tickettile.module.scss';
import { firestore } from '../../../../../firebase';

class TicketTile extends Component {
  state = { users: [] };

  // fetchImage = PersonID => {
  //   return user;
  // };

  getUsers = () => {
    firestore
      .collection('info')
      .get()
      .then(snapshot => {
        const users = snapshot.docs.map(doc => doc.data());
        this.setState({ users });
      });
  };

  componentDidMount() {
    this.getUsers();
  }

  /* 
    obj is a ticket
    obj.assigned, []

    fetch firebase for 
  
  */
  render() {
    console.log(this.state);

    return (
      <div>
        {this.props.data.map(obj => (
          <section className={styles.TicketTile}>
            <div className={styles.TicketContent}>
              <h3>{obj.title}</h3>
              <p>Employee ID: {obj.createdBy}</p>
              <p>Ticket ID: {obj.ID}</p>
              <p>Date: {obj.createdAtDate}</p>
            </div>
            <div>{/* <input type="checkbox"/> */}</div>
            <div>
              <img src={this.state.users[0].image} alt={this.state.users[0].name} />
            </div>
          </section>
        ))}
      </div>
    );
  }
}

export default TicketTile;

// Ticket ID:
// {Math.random().toString(36).slice(2).substring(0, 6).toUpperCase()}
