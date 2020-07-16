import React, { Component } from 'react';
import TicketCatStageOne from './TicketCatStageOne';
import { shallow } from "enzyme";


describe("TicketCatStageOne component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketCatStageOne data={[1,2,3]}/>);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

})