import React from "react";
import { shallow } from "enzyme";
import TicketCatStageThree from "./TicketCatStageThree";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketCatStageThree />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
