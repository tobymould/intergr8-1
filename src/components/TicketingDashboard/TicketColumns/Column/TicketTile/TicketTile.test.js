import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";
import data from '../../../../../data/mockTicketOrderData'

describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketTile data={data} />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
