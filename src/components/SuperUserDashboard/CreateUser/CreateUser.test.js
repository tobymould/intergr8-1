import React, { Component } from 'react';
import CreateUser from './CreateUser';
import { shallow } from 'enzyme';  

describe("CreateUser component tests", () => {

  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<CreateUser />);
  

    it("should render", () => { 
        expect(testComponent).toBeTruthy();
    })

})
})
