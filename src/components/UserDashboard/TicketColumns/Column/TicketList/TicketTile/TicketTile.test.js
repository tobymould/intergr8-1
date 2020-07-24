import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";

describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketTile
      key={"woiwrjoijwvojrwvw"}
      ticket={{
        ID: "WijGFghjBVftYHBVFthbvFTY",
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

      evetLog={[
        { content: { message: "HELLO" } },
        { content: { message: "WHYHELLO!" } },
        { content: { message: "HOWRU?" } }
      ]}

      setCurrentTicket={console.log("hello")}

    />)
  });

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});