import React, { Component } from 'react';
import DropDown from './DropDown';
import { shallow } from "enzyme";


describe("DropDown component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<DropDown filterOptions={[1,2,3]}/>);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})