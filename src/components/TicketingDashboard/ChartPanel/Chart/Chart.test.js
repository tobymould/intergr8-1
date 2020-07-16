import React, { Component } from 'react';
import Chart from './Chart';
import { shallow } from "enzyme";


describe("Chart component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Chart />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})