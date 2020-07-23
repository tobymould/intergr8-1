import React from "react";
import { shallow } from "enzyme";
import TicketList from "./TicketList";
import data from '../../../../../data/mockTicketOrderData.js'

describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketList data={data} />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
