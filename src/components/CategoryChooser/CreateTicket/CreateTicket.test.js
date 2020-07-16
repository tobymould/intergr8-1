import React from "react";
import { shallow } from "enzyme";
import CreateTicket from "./CreateTicket";

describe("Stage1 component tests", () => {
  const component = shallow(<CreateTicket />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
