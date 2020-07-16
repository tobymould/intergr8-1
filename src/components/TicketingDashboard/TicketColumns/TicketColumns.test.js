import React, { Component } from 'react';
import TicketColumns from './TicketColumns';
import { shallow } from "enzyme";


describe("TicketColumns component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketColumns />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})