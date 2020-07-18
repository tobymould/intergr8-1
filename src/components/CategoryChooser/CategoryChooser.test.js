import React from "react";
import CategoryChooser from "./CategoryChooser";
import { shallow } from 'enzyme';
import tileData  from "../../data/tileData";

describe("Stage1 component tests", () => {
  const component = shallow(<CategoryChooser />, { disableLifecycleMethods: true });

  beforeEach(() => {
    component = shallow(<CategoryChooser />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});

