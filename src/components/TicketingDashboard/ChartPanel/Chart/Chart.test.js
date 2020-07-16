<<<<<<< HEAD
import React, { Component } from 'react';
import Chart from './Chart';
import { shallow } from "enzyme";


describe("Chart component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Chart />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})
=======
import React from "react";
import { shallow } from "enzyme";
import Chart from "./Chart";

describe("Stage1 component tests", () => {
  const component = shallow(<Chart />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6a297b302b4198b349bcf8ccd31e9128886e58a0
