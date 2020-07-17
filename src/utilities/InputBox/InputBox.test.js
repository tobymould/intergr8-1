import React from "react";
import { shallow } from "enzyme";
import InputBox from "./InputBox";

describe("Stage1 component tests", () => {
  const component = shallow(<InputBox />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
