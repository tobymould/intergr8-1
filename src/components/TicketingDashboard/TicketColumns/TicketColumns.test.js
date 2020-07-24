import React from "react";
import { shallow } from "enzyme";
import TicketColumns from "./TicketColumns";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketColumns user={{uid: 'bla'}} allTickets={[{assignedTo: [1,2]}]}/>);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
