import React, { Component } from 'react';
import Option from './Option';
import { shallow } from "enzyme";


describe("Option component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Option queries={[1,2,3]}/>);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})