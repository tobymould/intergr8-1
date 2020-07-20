import React from "react";
import { shallow } from "enzyme";
import TicketView from "./TicketView";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketView />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
