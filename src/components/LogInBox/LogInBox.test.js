import React from "react";
import { shallow } from "enzyme";
import LogInBox from "./LogInBox";

describe("Stage1 component tests", () => {
  const component = shallow(<LogInBox />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
