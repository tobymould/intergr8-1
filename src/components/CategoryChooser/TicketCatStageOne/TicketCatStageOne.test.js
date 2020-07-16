import React from "react";
import { shallow } from "enzyme";
import TicketCatStageOne from "./TicketCatStageOne";

describe("Stage1 component tests", () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ];
  const testComponent = shallow(<TicketCatStageOne data={data} />);

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
