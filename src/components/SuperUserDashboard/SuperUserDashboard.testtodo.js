import React, { Component } from 'react';
import SuperUserDashboard from './SuperUserDashboard';
import { shallow } from "enzyme";


describe("SuperUserDashboard component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<SuperUserDashboard />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  it("should toggle isDisplayAddUser state when Add User button is clicked", () => {
    testComponent.setState({ isDisplayAddUser: false });

    testComponent.find('.SuperUserAddBtn').simulate('click');
    expect(testComponent.state('isDisplayAddUser')).toBe(true);

    testComponent.find('.SuperUserAddBtn').simulate('click');
    expect(testComponent.state('isDisplayAddUser')).toBe(false);
  })

  it("filterText state should be updated friom search field", () => {
    testComponent.setState({ filterText: "" });

    testComponent.find('input').simulate('change', {target: {value: 'new value'}});
    expect(testComponent.state('filterText')).toBe('new value');
  })
  
})