import React, { Component } from 'react';
import TicketCatStageTwo from './TicketCatStageTwo';
import { shallow } from "enzyme";


describe("TicketCatStageTwo component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketCatStageTwo />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})