<<<<<<< HEAD
import React, { Component } from 'react';
import TicketTile from './TicketTile';
import { shallow } from "enzyme";


describe("TicketTile component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketTile />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})
=======
import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketTile />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6a297b302b4198b349bcf8ccd31e9128886e58a0
