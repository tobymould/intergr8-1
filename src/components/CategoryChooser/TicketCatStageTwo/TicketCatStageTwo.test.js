import React from "react";
import { shallow } from "enzyme";
import TicketCatStageTwo from "./TicketCatStageTwo";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketCatStageTwo />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});