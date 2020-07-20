import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Stage1 component tests", () => {
  const component = shallow(<SubmitButton />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
