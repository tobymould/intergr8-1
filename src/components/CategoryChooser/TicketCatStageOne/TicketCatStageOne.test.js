import React from "react";
import TicketCatStageOne from "./TicketCatStageOne";
import { shallow } from 'enzyme';
import tileData  from "../../../data/tileData";


describe("TicketCatStageOne tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<TicketCatStageOne data={tileData} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
