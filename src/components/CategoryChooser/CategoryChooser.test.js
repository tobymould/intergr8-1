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

});

