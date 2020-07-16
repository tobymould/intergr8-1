import React, { Component } from 'react';
import CategoryChooser from './CategoryChooser';
import { shallow } from "enzyme";


describe("CategoryChooser component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<CategoryChooser />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})