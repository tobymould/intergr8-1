import React, { Component } from 'react';
import TicketTile from './TicketTile';
import { shallow } from "enzyme";


describe("TicketTile component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketTile />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})