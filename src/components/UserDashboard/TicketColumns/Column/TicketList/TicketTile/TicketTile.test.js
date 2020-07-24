import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";

describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(
      <TicketTile
        key="woiwrjoijwvojrwvw"
        ticket={
          {
            createdAtDate: "24/07/2020, 09:37:39",
            assignedTo: [],
            category: "HR",
            subCategory: "Leave/Holidays",
            priority: 1,
            isOpen: false,
            modifiedAtDate: ["24/07/2020, 09:37:39", "24/07/2020, 09:37:40", "24/07/2020, 09:40:05"],
            ID: "MFzB6QR6EGUT3ZGS9Dug",
            eventLog: [
              {
                content: { name: "p4M65rcqDHh5T4obObKCRqFW29X2", message: "Hello HR, I'm wondering if the photo I took at the social is suitable to store on my work laptop?" },
                date: "24/07/2020, 09:37:39",
                details: "Ticket was created",
                type: "opened"
              },
              {
                content: { message: "Lovely photo", name: "r3KMVNiUi5YGLfmHzWcjCW8UsgE3" },
                date: "24/07/2020, 09:40:05",
                details: "New message received",
                type: "message"
              }
            ]
          }
        }
      />)
  });

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});

          //   {
          //   ID: "WijGFghjBVftYHBVFthbvFTY",
          //   eventLog: {
          //     0: [
          //       { content: { message: "HELLO" } }
          //     ]
          //   },
          //   isOpen: true,
          //   name: "Seth McFarlane",
          //   createdBy: "Boaty McBoatface"
          // }}
          // currentTicket={{
          //   ID: "WijGFghjBVftYHBVFthbvFTY",
          //   isOpen: true, name:
          //     "Seth McFarlane",
          //   createdBy: "Boaty McBoatface"
          // }}
          // setCurrentTicket={console.log("hello")