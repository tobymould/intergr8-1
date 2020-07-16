import React from "react";
import CategoryChooser from "./CategoryChooser";
import { shallow } from 'enzyme';
import tileData  from "../../data/tileData";

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
    component.instance().optionClick('Payroll')
    expect(component.state('stage')).toBe(1);
    
  })

});

