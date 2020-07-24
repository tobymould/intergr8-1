import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";
import tickets from '../../../../../../data/newMockDataTickets';

describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketTile ticket={tickets[0]} />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
