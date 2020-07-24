import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";

describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(
      <TicketTile
        key="woiwrjoijwvojrwvw"
        ticket={{
          ID: "WijGFghjBVftYHBVFthbvFTY",
          eventLog={
            0: [
              { content: { message: "HELLO" } }
            ]
          },
          isOpen: true,
          name: "Seth McFarlane",
          createdBy: "Boaty McBoatface"
        }}
        currentTicket={{
          ID: "WijGFghjBVftYHBVFthbvFTY",
          isOpen: true, name:
            "Seth McFarlane",
          createdBy: "Boaty McBoatface"
        }}
        setCurrentTicket={console.log("hello")}
      />)
  });

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});