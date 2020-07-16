import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketTile />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
