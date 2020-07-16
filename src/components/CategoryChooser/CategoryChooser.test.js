import React from "react";
import CategoryChooser from "./CategoryChooser";
import { shallow } from 'enzyme';
import tileData  from "../../data/tileData";
import Button from "../../utilities/Button";

describe("CategoryChooser tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<CategoryChooser />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('the state should change when clicking a tile', () => {
    expect(component.state('stage')).toBe(0);
    component.instance().optionClick('payroll')
    expect(component.state('stage')).toBe(1);
    
  })

  
  it('the state should change when clicking the back button', () => {
    component.setState({ stage: 2, selector: ["healthandsafety", "What health and safety policies are in place"] });
    component.instance().optionClick('payroll', -1)
    expect(component.state('stage')).toBe(1);
  })
});

