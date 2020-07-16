<<<<<<< HEAD
import React, { Component } from 'react';
import ResolveTicketModal from './ResolveTicketModal';
import { shallow } from "enzyme";


describe("ResolveTicketModal component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<ResolveTicketModal />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})
=======
import React from "react";
import { shallow } from "enzyme";
import ResolveTicketModal from "./ResolveTicketModal";

describe("Stage1 component tests", () => {
  const component = shallow(<ResolveTicketModal />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6a297b302b4198b349bcf8ccd31e9128886e58a0
