import React, { Component } from 'react';
import TicketView from './TicketView';
import { shallow } from "enzyme";


describe("TicketView component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketView />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})