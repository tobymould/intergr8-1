import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";

describe("Stage1 component tests", () => {
  const component = shallow(<NavBar />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
