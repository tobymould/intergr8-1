<<<<<<< HEAD
import React, { Component } from 'react';
import Message from './Message';
import { shallow } from "enzyme";


describe("Message component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Message />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})
=======
import React from "react";
import { shallow } from "enzyme";
import Message from "./Message";

describe("Stage1 component tests", () => {
  const component = shallow(<Message />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6a297b302b4198b349bcf8ccd31e9128886e58a0
