import React, { Component } from 'react';
import ResolveTicketModal from './ResolveTicketModal';
import { shallow } from "enzyme";


describe("ResolveTicketModal component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<ResolveTicketModal />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})