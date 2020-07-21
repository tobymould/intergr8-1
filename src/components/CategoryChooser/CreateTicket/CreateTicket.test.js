import React from "react";
import CreateTicket from "./CreateTicket";
import { shallow } from "enzyme";

describe("CreateTicket tests", () => {
  
  let component;

  beforeEach(() => {
    component = shallow(<CreateTicket choices={["Health & Safety", "What health and safety policies are in place"]}/>);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
