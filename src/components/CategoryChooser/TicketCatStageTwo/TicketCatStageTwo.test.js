import React from "react";
import TicketCatStageTwo from "./TicketCatStageTwo";
import { shallow } from 'enzyme';
import tileData  from "../../../data/tileData";

describe("TicketCatStageTwo tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<TicketCatStageTwo queries={tileData['Health & Safety'].queries} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should display the same number of tiles as queries', () => {
    const numberOfRenderedTiles = component.find(Option).length;
    const amountOfQueries = tileData['Health & Safety'].queries.length;
    expect(numberOfRenderedTiles === amountOfQueries)
    
  })

});