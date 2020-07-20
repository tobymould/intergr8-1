import React from "react";
import { shallow } from "enzyme";
import ChartPanel from "./ChartPanel";

describe("Stage1 component tests", () => {
  const component = shallow(<ChartPanel />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
