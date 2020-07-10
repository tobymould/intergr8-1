/* User Object */

const users = [
  {
    UID: '',
    forename: '',
    surname: '',
    email: '',
    password: '',
    img: '',
    role: '', // employee (1), agent (2), superagent (3)
    department: '', // null for employees
    roleTextSnippet: '',


  }
]






/* Ticket Object */

const ticket = [
  {
    createdBy: '', // Employee UID
    assignedTo: [], // can be multiple
    createdAtDate: '',
    modifiedAtDate: [],
    
    /*
    Does a ticket become automatically assigned to an agent on creation?
    */
    
    isOpen: true,
    priority: 3, // Time-based on date 
    
    eventLog: [
      // Includes all events including messages. 
      {
        type: 'messageItem',
        details: 'Help me!',
        date: '01/01/1970 00:00:01'
      }
    ],
  }
]

/*
 ____ ----- Events -----_____
  assignedTo:
  changeOfPriority:
  changeOfAgent:
  changeOfCateogry:
  messageItem:
  isResolved:
  reOpen:
*/