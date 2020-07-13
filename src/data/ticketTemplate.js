const ticket = [
  {
    createdBy: "0123456789", // Employee UID
    assignedTo: ['3859485849'], // can be multiple
    createdAtDate: "01/01/1970 00:00:01",
    modifiedAtDate: ["01/02/1970 00:00:01"],
    categories: 
    isOpen: true,
    priority: 3, // Time-based on date
    eventLog: [
      // Includes all events including messages.
      // See below for example events.
      {
        type: "opened",
        content: {
          name: "E00000002",
          message: "I haven't been paid this month.",
        },
        date: "13/07/2020 13:05:43",
      },
    ],
  },
];

// Event templates
// Event types:  opened, message, assignedTo, changeOfCategory, isResolved, reOpened

[
  {
    type: "opened",
    content: {
      ID: "", // user that opened ticket
      message: "string: message entered by user when ticket is created",
    },
    date: "13/07/2020 13:05:43",
  },
  {
    type: "message",
    content: {
      ID: "", // user that sent message
      message: "string: message between employee and HR agent",
    },
    date: "13/07/2020 13:05:43",
  },
  {
    type: "assignedTo",
    content: {
      ID: "", // newly assigned HR agent
      message: null,
    },
    date: "13/07/2020 13:05:43",
  },
  {
    type: "changeOfCategory",
    content: {
      ID: "", // user that changed category
      message: null,
    },
    date: "13/07/2020 13:05:43",
  },
  {
    type: "isResolved",
    content: {
      ID: "", // user that resolved ticket
      message: null,
    },
    date: "13/07/2020 13:05:43",
  },
  {
    type: "isResolved",
    content: {
      ID: "", // user that resolved ticket
      message: null,
    },
    date: "13/07/2020 13:05:43",
  },
  {
    type: "reOpened",
    content: {
      ID: "", // user that reOpened ticket
      message: null,
    },
    date: "13/07/2020 13:05:43",
  },
];
