import React from "react";
import { shallow } from "enzyme";
import Option from "./Option";

describe("Stage1 component tests", () => {
  const component = shallow(<Option queries={["I have a query!"]} />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
