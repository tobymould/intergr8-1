import React, { Component } from 'react';
import LoginBox from './LoginBox';
import { shallow } from "enzyme";


describe("LoginBox component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<LoginBox />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})