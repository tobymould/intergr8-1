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

      setCurrentTicket={console.log("hello")}

      className={styles.TicketTile}
    />)
  });

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});