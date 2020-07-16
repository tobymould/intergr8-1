import React, { Component } from 'react';
import Tile from './Tile';
import { shallow } from "enzyme";


describe("Tile component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<Tile data={1}/>);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  })

  
})