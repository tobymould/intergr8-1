import React, { Component } from "react";
import styles from "./Message.module.scss";
import firebase, {firestore} from '../../../../../../firebase';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class Message extends Component {
  state = {
    user: {}
  }
  componentDidMount() {
    firestore
      .collection('info')
      .where("ID", "==", this.props.item.content.name )
      .get()
        .then(snapshot => {
          snapshot.docs
            .forEach(doc => {
              this.setState({user: doc.data()})
            })
        })
      // })      
      .catch(err => console.log(err))
    this.getImage();
  }

  getImage = () => {
    if (this.props.item.content.filePath) {
      firebase
      .storage()
      .ref()
      .child(this.props.item.content.filePath)
      .getDownloadURL()
      .then((url) => { this.setState({ img: url })})  
    }
  }

  typeOfMessage() {
    const { content, date } = this.props.item;
    const pic =  this.state.user.img ? <img src={this.state.user.img} alt="Employee pic" /> : <FontAwesomeIcon className={styles.icon} icon="user-circle"/>
    const message = (
      <div className={styles.messageContent}>
        <div className={styles.nameAndDate}>
          <h3>{this.state.user.name ? this.state.user.name : `ID: ${content.name}`}</h3>
          <p>{date}</p>
        </div>
          {content.filePath ? <a href={this.state.img} target="_blank"><img className={styles.attachment} src={this.state.img} alt={content.filePath}/></a> : null}
        <p>
          {content.message ? content.message : null}
        </p>
      </div>
    );

    if (this.props.item.content.name && this.props.item.content.name === this.props.user.uid) {
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
    return <section className={styles.message} item={this.props.item}>{this.typeOfMessage()}</section>;
  }
}

export default Message;
