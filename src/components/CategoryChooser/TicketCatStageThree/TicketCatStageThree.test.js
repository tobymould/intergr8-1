import React, { Component } from 'react';
import TicketCatStageThree from './TicketCatStageThree';
import { shallow } from "enzyme";


describe("TicketCatStageThree component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketCatStageThree />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

})