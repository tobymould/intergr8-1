import React, { Component } from "react";
import styles from "./ResolveTicketModal.module.scss";

class ResolveTicketModal extends Component {
  render() {
    const { 
      toggleResolveTicketDisplay, 
      toggleResolveModal, 
      updateInputResolve
    } = this.props;
    return (
      <>
        <div className={styles.ResolveModal}>
          <div className={styles.ResolveContainer}>
            <form className={styles.ModalContent} name="formname" onSubmit="returnfalse">
              <h2>Provide a specific reason for marking this ticket ‘Resolved’:
              </h2>
              <textarea required name="resolveReason" id="resolveReason" placeholder={"Type Here..."} className={styles.resolveReason} onChange={updateInputResolve}>
              </textarea>
              <div className={styles.ButtonsWrapper}>
                <span className={styles.ButtonWrapper}> <button type="button" text={"Resolve ticket"} onClick={() => { toggleResolveTicketDisplay(); toggleResolveModal() }}>Resolve ticket</button></span>
                <span className={styles.ButtonWrapper}><button type="button" text={"Cancel"} onClick={this.props.toggleResolveModal}>Cancel</button></span>
              </div>
            </form >
          </div >
        </div >
      </>
    );
  }
}
export default ResolveTicketModal;