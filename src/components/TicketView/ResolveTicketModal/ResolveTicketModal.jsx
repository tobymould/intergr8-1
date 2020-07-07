import React, { Component } from 'react';
import styles from './ResolveTicketModal.module.scss'

class ResolveTicketModal extends Component {
  // state = { open: false }
  render() {
    return (
      <>
        <div className={styles.ResolveModal}>
          <div className={styles.ResolveContainer}>
            <form class="modal-content" action="/action_page.php">
                <h2>Provide a specific reason for marking this ticket 'Resolved':</h2>
                <textarea name="" id="" placeholder={"Type Here..."}></textarea>
                <div class="clearfix">
                  <button type="button" class="cancelbtn">Resolve</button>
                  <button type="button" class="deletebtn">Cancel</button>
                </div>
            </form>
            </div>
        </div>
      </>
    );
  }
}

export default ResolveTicketModal;