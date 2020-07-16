import React from "react";
<<<<<<< HEAD
import TicketCatStageTwo from "./TicketCatStageTwo";
import { shallow } from 'enzyme';
import tileData  from "../../../data/tileData";

describe("TicketCatStageTwo tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<TicketCatStageTwo queries={tileData['healthandsafety'].queries} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

  it('should display the same number of tiles as queries', () => {
    const numberOfRenderedTiles = component.find(Option).length;
    const amountOfQueries = tileData['healthandsafety'].queries.length;
    expect(numberOfRenderedTiles === amountOfQueries)
    
  })

});
=======
import { shallow } from "enzyme";
import TicketCatStageTwo from "./TicketCatStageTwo";

describe("Stage1 component tests", () => {
  const component = shallow(<TicketCatStageTwo />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
>>>>>>> 6a297b302b4198b349bcf8ccd31e9128886e58a0
