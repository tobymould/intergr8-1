import React from "react";
import { shallow } from "enzyme";
import ResolveTicketModal from "./ResolveTicketModal";

describe("Stage1 component tests", () => {
  const component = shallow(<ResolveTicketModal />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
