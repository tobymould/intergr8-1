const ticketData = [
  {
    ID: "",
    createdBy: 100000002, // Employee UID
    assignedTo: ['Nick'], // can be multiple
    createdAtDate: "13/07/2020",
    modifiedAtDate: [""],
    isOpen: true,
    priority: 3, // Time-based on date
    eventLog: [
      // Includes all events including messages.
      {
        type: "opened",
        details: "Ticket was created",
        content: {
          name: 100000002,
          message: "I haven't been paid this month."
        },
        date: "13/07/2020 13:05:43",
      },
      {
        type: "assignedTo",
        details: "Ticket assigned to ",
        content: {
          name: 100000009,
          message: null
        },
        date: "13/07/2020 16:05:43",
      },
      {
        type: "message",
        details: "New message received",
        content: {
          name: 100000002,
          message: "I still haven't heard back from HR"
        },
        date: "13/07/2020 15:05:43",
      },
      {
        type: "changeOfAgent",
        details: "Ticket escalated to ",
        content: {
          name: 100000009
        },
        date: "13/07/2020 17:05:43",
      },
    ],
  },
];
