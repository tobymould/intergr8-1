import React, { Component } from 'react';
import Button from './Button';
import { shallow } from "enzyme";


describe("Button component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Button />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})