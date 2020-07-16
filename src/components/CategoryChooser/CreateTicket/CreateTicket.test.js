import React, { Component } from 'react';
import CreateTicket from './CreateTicket';
import { shallow } from "enzyme";


describe("CreateTicket component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<CreateTicket />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

})