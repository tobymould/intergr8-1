<<<<<<< HEAD
import React, { Component } from 'react';
import TicketView from './TicketView';
import { shallow } from "enzyme";


describe("TicketView component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketView />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})
=======
import React from "react";
import { shallow } from "enzyme";
import TicketView from "./TicketView";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketView />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6a297b302b4198b349bcf8ccd31e9128886e58a0
