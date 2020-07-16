import React, { Component } from 'react';
import AssignedUser from './AssignedUser';
import { shallow } from "enzyme";


describe("AssignedUser component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<AssignedUser />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

})