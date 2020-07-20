import React from "react";
import { shallow } from "enzyme";
import Chart from "./Chart";

describe("Stage1 component tests", () => {
  const component = shallow(<Chart />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
