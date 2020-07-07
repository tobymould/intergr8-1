import React, { Component } from 'react';
import styles from './ResolveTicketModal.module.scss'
import Button from '../../Button';

class ResolveTicketModal extends Component {
  state = { open: false }
  render() {
    return (
      <>
        <div className={styles.ResolveModal}>
          <div className={styles.ResolveContainer}>
            <form class="modal-content" action="/action_page.php">
              <h2>Provide a specific reason for marking this ticket 'Resolved':
              </h2>
              <textarea name="resolveReason" id="resolveReason" placeholder={"Type Here..."} className={styles.resolveReason}>
              </textarea>
              <div class="clearfix">
                <Button type="button" class="cancelbtn" text={"Resolve ticket"} />
                <Button type="button" class="deletebtn" text={"Cancel"} />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ResolveTicketModal;