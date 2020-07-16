import React from "react";
import { shallow } from "enzyme";
import LoginBox from "./LoginBox";

describe("Stage1 component tests", () => {
  const component = shallow(<LoginBox />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
