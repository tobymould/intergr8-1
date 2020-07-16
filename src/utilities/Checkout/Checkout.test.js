import React, { Component } from 'react';
import Checkout from './Checkout';
import { shallow } from "enzyme";


describe("Checkout component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Checkout />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})