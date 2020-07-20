import React from "react";
import { shallow } from "enzyme";
import Message from "./Message";

describe("Stage1 component tests", () => {
  const component = shallow(<Message />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
