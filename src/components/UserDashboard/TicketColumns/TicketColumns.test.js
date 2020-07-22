import React from "react";
import { shallow } from "enzyme";
import TicketColumns from "./TicketColumns";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketColumns />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
