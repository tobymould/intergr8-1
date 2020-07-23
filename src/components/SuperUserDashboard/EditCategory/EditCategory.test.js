import React from "react";
import { shallow } from "enzyme";
import EditCategory from "./EditCategory";

describe("Stage1 component tests", () => {
  const component = shallow(<EditCategory />, { disableLifecycleMethods: true });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
