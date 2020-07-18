import React from "react";
import Checkout from "./Checkout";
import { shallow } from 'enzyme';


describe("Checkout tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<Checkout />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
