const ticketData = [
  {
    ID: '',
    createdBy: 'E00000002', // Employee UID
    assignedTo: ['S00000001'], // can be multiple
    createdAtDate: '13/07/2020',
    modifiedAtDate: [''],
    isOpen: true,
    priority: 3, // Time-based on date
    eventLog: [
      // Includes all events including messages.
      {
        type: 'opened',
        details: 'Ticket was created',
        content: {
          name: 'E00000002',
          message: "I haven't been paid this month."
        },
        date: '13/07/2020 13:05:43'
      },
      {
        type: 'assignedTo',
        details: 'Ticket assigned to ',
        content: {
          name: 'E00000009',
          message: null
        },
        date: '13/07/2020 16:05:43'
      },
      {
        type: 'message',
        details: 'New message received',
        content: {
          name: 'E00000002',
          message: "I still haven't heard back from HR"
        },
        date: '13/07/2020 15:05:43'
      },
      {
        type: 'changeOfAgent',
        details: 'Ticket escalated to ',
        content: {
          name: 'E00000009'
        },
        date: '13/07/2020 17:05:43'
      }
    ]
  },

  {
    ID: '',
    createdBy: 'E00000001', // Employee UID
    assignedTo: ['S00000001'], // can be multiple
    createdAtDate: '13/07/2020',
    modifiedAtDate: ['14/07/2020'],
    isOpen: true,
    priority: 3, // Time-based on date
    eventLog: [
      // Includes all events including messages.
      {
        type: 'opened',
        details: 'Ticket was created',
        content: {
          name: 'E00000001',
          message: 'I want to findout my UTR number'
        },
        date: '3/07/2020 11:02:43'
      },
      {
        type: 'assignedTo',
        details: 'Ticket assigned to ',
        content: {
          name: 'A00000001',
          message: null
        },
        date: '3/07/2020 16:09:43'
      },
      {
        type: 'message',
        details: 'New message received',
        content: {
          name: 'E00000002',
          message: 'Hi, could you please tell me my UTR number. Thanks'
        },
        date: '3/07/2020 11:05:43'
      },
      {
        type: 'changeOfAgent',
        details: 'Ticket escalated to ',
        content: {
          name: 'S00000001'
        },
        date: '14/07/2020 12:00:43'
      }
    ]
  },

  {
    ID: '',
    createdBy: 'E00000002',
    assignedTo: ['A00000001'],
    createdAtDate: '13/07/2020',
    modifiedAtDate: ['13/07/2020'],
    isOpen: true,
    priority: 3,
    eventLog: [
      {
        type: 'opened',
        details: 'Ticket was created',
        content: {
          name: 'E00000002',
          message: 'I want to findout my pay'
        },
        date: '3/07/2020 11:02:43'
      },
      {
        type: 'assignedTo',
        details: 'Ticket assigned to ',
        content: {
          name: 'A00000001',
          message: null
        },
        date: '3/07/2020 16:09:43'
      },
      {
        type: 'message',
        details: 'New message received',
        content: {
          name: 'A00000001',
          message: 'Hi, Your salary is £11,800. I will close your ticket now. Many thanks'
        },
        date: '13/07/2020 17:05:43'
      },
      {
        type: 'isResolved',
        details: 'Ticket resolved',
        content: {
          name: 'A00000001',
          comment: 'Closing ticket for E00000002'
        },
        date: '13/07/2020 17:10:20'
      }
    ]
  },

  {
    ID: '',
    createdBy: 'E00000002',
    assignedTo: ['S00000001'],
    createdAtDate: '13/09/2020',
    modifiedAtDate: ['26/010/2020'],
    isOpen: true,
    priority: 3,
    eventLog: [
      {
        type: 'opened',
        details: 'Ticket was created',
        content: {
          name: 'E00000002',
          message: 'I want to findout my pay'
        },
        date: '3/07/2020 11:02:43'
      },
      {
        type: 'assignedTo',
        details: 'Ticket assigned to ',
        content: {
          name: 'A00000001',
          message: null
        },
        date: '3/07/2020 16:09:43'
      },
      {
        type: 'message',
        details: 'New message received',
        content: {
          name: 'A00000001',
          message: 'Hi, Your salary is £11,800. I will close your ticket now. Many thanks'
        },
        date: '13/07/2020 17:05:43'
      },
      {
        type: 'isResolved',
        details: 'Ticket resolved',
        content: {
          name: 'A00000001',
          comment: 'Closing ticket for E00000002'
        },
        date: '13/07/2020 17:10:20'
      },
      {
        type: 'reOpened',
        details: 'Ticket has been reopened for details',
        content: {
          name: 'E00000002',
          message: 'Sorry, I thought I was meant to have a bonus?'
        },
        date: '3/07/2020 11:02:43'
      },
      {
        type: 'changeOfCategory',
        details: 'Complaint',
        content: {
          name: 'A00000001',
          comment: 'Recruitment to action'
        },
        date: '13/07/2020 17:10:20'
      }
    ]
  }
];
