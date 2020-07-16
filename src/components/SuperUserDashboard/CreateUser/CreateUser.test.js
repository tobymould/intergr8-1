import React, { Component } from 'react';
import CreateUser from './CreateUser';
import { shallow } from "enzyme";


describe("CreateUser component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<CreateUser />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  it("should update name state from corresponding input field", () => {
    testComponent.setState({ name: "" });

    testComponent.find('.name').simulate('change', {target: {value: 'new value'}});
    expect(testComponent.state('name')).toBe('new value');
  })
})
