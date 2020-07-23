import React from "react";
import CategoryChooser from "./CategoryChooser";
import { shallow } from 'enzyme';
import tileData  from "../../data/tileData";

describe("Stage1 component tests", () => {
  let component

  beforeEach(() => {
    component = shallow(<CategoryChooser />, { disableLifecycleMethods: true });
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});

