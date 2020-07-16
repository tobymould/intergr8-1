import React from "react";
import { shallow } from "enzyme";
import Checkout from "./Checkout";

describe("Stage1 component tests", () => {
  const component = shallow(<Checkout />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
