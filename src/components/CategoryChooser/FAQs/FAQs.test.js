import React from "react";
import FAQs from "./FAQs";
import { shallow } from 'enzyme';

describe("FAQs tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<FAQs choices={["Health & Safety", "What health and safety policies are in place"]}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});