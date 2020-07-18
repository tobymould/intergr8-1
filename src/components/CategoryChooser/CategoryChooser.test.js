import React from "react";
import { shallow } from "enzyme";
import CategoryChooser from "./CategoryChooser";

describe("Stage1 component tests", () => {
  const component = shallow(<CategoryChooser />, { disableLifecycleMethods: true });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
