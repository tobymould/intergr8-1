import React from "react";
import { shallow } from "enzyme";
import TicketingDashboard from "./TicketingDashboard";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketingDashboard />, { disableLifecycleMethods: true });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
