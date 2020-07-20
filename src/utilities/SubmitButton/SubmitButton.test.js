import React from "react";
import { shallow } from "enzyme";
import SubmitButton from "./SubmitButton";

describe("Stage1 component tests", () => {
  const component = shallow(<SubmitButton />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
