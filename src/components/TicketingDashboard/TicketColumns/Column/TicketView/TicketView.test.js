import React from "react";
import { shallow } from "enzyme";
import TicketView from "./TicketView";
import data from '../../../../../data/mockTicketOrderData'

describe("Stage1 component tests", () => {
  const component = shallow(<TicketView data={{eventLog: ['bla', 2]}} user={{uid: 'bla'}}/>, { disableLifecycleMethods: true });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
