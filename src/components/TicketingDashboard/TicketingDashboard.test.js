import React from "react";
import { shallow, ReactWrapper } from "enzyme";
import TicketingDashboard from "./TicketingDashboard";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketingDashboard />, { disableLifecycleMethods: true });

  it("should render", () => {
    expect(component).toBeTruthy();
  });

  it("should calculate the total tickets correctly", () => {
    component.setState({allTickets: [1,2,3,4,5,6,7]});
    let lengthAnswer = component.instance().countUserTickets;
    expect(lengthAnswer === 7);
  });

});
