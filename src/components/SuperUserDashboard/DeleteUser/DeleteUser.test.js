import React, { Component } from 'react';
import DeleteUser from './DeleteUser';
import { shallow } from "enzyme";


describe("DeleteUser component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<DeleteUser />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})