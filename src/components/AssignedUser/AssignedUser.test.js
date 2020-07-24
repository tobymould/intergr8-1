import React from "react";
import { shallow } from "enzyme";
import AssignedUser from "./AssignedUser";

describe("Stage1 component tests", () => {
 let component

  beforeEach(() => {
    component = shallow(<AssignedUser />, { disableLifecycleMethods: true });
  })

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
