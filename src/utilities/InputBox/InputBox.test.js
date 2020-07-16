import React, { Component } from 'react';
import InputBox from './InputBox';
import { shallow } from "enzyme";


describe("InputBox component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<InputBox />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})