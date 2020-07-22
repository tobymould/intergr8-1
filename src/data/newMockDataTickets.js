export const ticketData = [
  {
    ID: '',
    category: 1,
    subCategory: 3,
    createdBy: 'E00000002', // Employee UID
    assignedTo: ['S00000001'], // can be multiple
    createdAtDate: '13/07/2020',
    modifiedAtDate: ['13/07/2020 17:05:43'],
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
      // Attachment
      {
        type: 'fileUpload',
        details: 'File was uploaded',
        content: {
          name: "E00000002",
          filePath: 'ticketid/filename'
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
    category: 1,
    subCategory: 1,
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
    category: 1,
    subCategory: 2,
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
    category: 4,
    subCategory: 2,
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
          message: "I haven't had my annual appraisal"
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
          message: 'Hi, your appraisal will be with your line manager next month'
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
          category: 1,
          subCategory: 3,
          comment: 'Recruitment to action as the employee was set up on the wrong wage code'
        },
        date: '13/07/2020 17:10:20'
      }
    ]
  },

  {
    ID: '',
    category: 2,
    subCategory: 1,
    createdBy: 'E00000001',
    assignedTo: ['A00000001'],
    createdAtDate: '11/07/2020',
    modifiedAtDate: ['12/07/2020'],
    isOpen: true,
    priority: 3,
    eventLog: [
      {
        type: 'opened',
        details: 'Ticket was created',
        content: {
          name: 'E00000002',
          message: 'David Wildman stole my stapler and I want it back.'
        },
        date: '11/07/2020 11:02:43'
      },
      {
        type: 'assignedTo',
        details: 'Ticket assigned to ',
        content: {
          name: 'A00000001',
          message: null
        },
        date: '11/07/2020 16:09:43'
      },
      {
        type: 'message',
        details: 'New message received',
        content: {
          name: 'A00000001',
          message: "Hi Niall, we've sent a request to David. If he does it again let us know and we'll make him redundant."
        },
        date: '12/07/2020 17:05:43'
      },
      {
        type: 'isResolved',
        details: 'Ticket resolved',
        content: {
          name: 'A00000001',
          comment: 'Closing ticket for E00000002. David Wildman has been fired, and is due to be stripped of his OBE. His assets are to be confiscated and he will be given notice by his landlord. His family have disowned him and there is a bounty of £500,000 for his head.'
        },
        date: '12/07/2020 17:06:10'
      }
    ]
  }
];
