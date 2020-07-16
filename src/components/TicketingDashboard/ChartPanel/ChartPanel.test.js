import React, { Component } from 'react';
import ChartPanel from './ChartPanel';
import { shallow } from "enzyme";


describe("ChartPanel component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<ChartPanel />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})