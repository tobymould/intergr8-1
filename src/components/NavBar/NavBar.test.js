import React, { Component } from 'react';
import NavBar from './NavBar';
import { shallow } from "enzyme";


describe("NavBar component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<NavBar />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})