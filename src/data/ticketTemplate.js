const ticket = [
  {
    createdBy: "0123456789", // Employee UID
    assignedTo: ['Wally'], // can be multiple
    createdAtDate: "01/01/1970",
    modifiedAtDate: ["01/02/1970"],
    isOpen: true,
    priority: 3, // Time-based on date
    eventLog: [
      // Includes all events including messages.
      {
        type: "message",
        details: "Help me!",
        date: "01/01/1970 00:00:01",
      },
    ],
  },
];

/*  Event templates

Event types: 
opened 
message
assignedTo 
changeOfCategory 
message
isResolved
reOpened 
*/

{
  type: "opened",
  details: "Opened by Mr Open at 01/01/1970",
  content: "Please help me!",
  date: "01/01/1970 00:00:01",
}

{
  type: "message",
  details: "Help me!",
  content: "Please help me!",
  date: "01/01/1970 00:00:01",
}

{
  type: "assignedTo",
  details: "Ms. AssignedTo",
  date: "01/01/1970 00:00:01",
}

{
  type: "changeOfCategory",
  details: "Help me!",
  date: "01/01/1970 00:00:01",
}

{
  type: "isResolved",
  details: "Help me!",
  date: "01/01/1970 00:00:01",
}

{
  type: "reOpened",
  details: "Help me!",
  date: "01/01/1970 00:00:01",
}