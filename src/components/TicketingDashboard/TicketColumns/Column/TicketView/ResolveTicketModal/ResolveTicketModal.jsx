import React, { Component } from "react";
import styles from "./ResolveTicketModal.module.scss";

class ResolveTicketModal extends Component {
  render() {
    const {
      toggleResolveTicketDisplay,
      toggleResolveModal,
      updateInputResolve,
    } = this.props;
    return (
      <>
        <div className={styles.ResolveModal}>
          <div className={styles.ResolveContainer}>
            <form
              className={styles.ModalContent}
              name="formname"
              onSubmit="returnfalse"
            >
              <h2>Are you happy to mark this ticket as 'Resolved'?
              </h2>
              {/* <textarea required name="resolveReason" id="resolveReason" placeholder={"Type Here..."} className={styles.resolveReason} onChange={updateInputResolve}>
              </textarea> */}
              <div className={styles.ButtonsWrapper}>
              <button type="button" className={styles.btnConfirm} onClick={() => { toggleResolveTicketDisplay(); toggleResolveModal() }}>Confirm</button>
              <button type="button" className={styles.btnCancel} onClick={this.props.toggleResolveModal}>Cancel</button>
              </div>
            </form >
          </div >
        </div >
      </>
    );
  }
}
export default ResolveTicketModal;