import React, { Component } from 'react';
import styles from './ResolveTicketModal.module.scss'
import Button from '../../Button';

class ResolveTicketModal extends Component {
  // state = { open: false }
  render() {
    return (
      <>
        <div className={styles.ResolveModal}>
          <div className={styles.ResolveContainer}>
            <form className={styles.ModalContent}>
              <h2>Provide a specific reason for marking this ticket 'Resolved':
              </h2>
              <textarea required name="resolveReason" id="resolveReason" placeholder={"Type Here..."} className={styles.resolveReason} onChange={this.props.updateInputResolve}>
              </textarea>
              <div className={styles.ButtonsWrapper}>
                <span className={styles.ButtonWrapper}> <Button type="button" text={"Resolve ticket"} onClick={this.props.handleResolve}/></span>
                <span className={styles.ButtonWrapper}><Button type="button" text={"Cancel"} onclick={this.props.toggleResolveModal} /></span>
                <p>{this.props.value}</p>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ResolveTicketModal;