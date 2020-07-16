<<<<<<< HEAD
import React, { Component } from 'react';
import Column from './Column';
import { shallow } from "enzyme";


describe("Column component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Column />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})
=======
import React from "react";
import { shallow } from "enzyme";
import Column from "./Column";

describe("Stage1 component tests", () => {
  const component = shallow(<Column />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6a297b302b4198b349bcf8ccd31e9128886e58a0
