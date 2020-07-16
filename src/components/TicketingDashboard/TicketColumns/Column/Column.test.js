import React from "react";
import { shallow } from "enzyme";
import Column from "./Column";

describe("Stage1 component tests", () => {
  const component = shallow(<Column />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
