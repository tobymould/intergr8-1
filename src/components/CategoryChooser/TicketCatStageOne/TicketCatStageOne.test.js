import React from "react";
import { shallow } from "enzyme";
import TicketCatStageOne from "./TicketCatStageOne";

describe("Stage1 component tests", () => {
  const testComponent = shallow(<TicketCatStageOne data={"Hello!"} />);

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
