import React, { Component } from 'react';
import Message from './Message';
import { shallow } from "enzyme";


describe("Message component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Message />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})