import React from "react";
import { shallow } from "enzyme";
import DropDown from "./DropDown";

describe("Stage1 component tests", () => {
  const component = shallow(
    <DropDown filterOptions={["I am a filteroption!"]} />
  );

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
