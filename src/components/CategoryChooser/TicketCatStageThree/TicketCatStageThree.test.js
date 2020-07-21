import React from "react";
import TicketCatStageThree from "./TicketCatStageThree";
import { shallow } from 'enzyme';

describe("TicketCatStageThree tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<TicketCatStageThree />, { disableLifecycleMethods: true });
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
