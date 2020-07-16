import React, { Component } from 'react';
import TicketingDashboard from './TicketingDashboard';
import { shallow } from "enzyme";


describe("TicketingDashboard component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketingDashboard />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})