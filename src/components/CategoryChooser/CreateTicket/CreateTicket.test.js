import React from "react";
import CreateTicket from "./CreateTicket";
import { shallow } from 'enzyme';
import sampleTickets from '../../../data/mockTicketOrderData';

describe("CreateTicket tests", () => {

  let component;

  beforeEach(() => {
    component = shallow(<CreateTicket data={sampleTicket[4]} choices={["Health & Safety", "What health and safety policies are in place"]} />);
  })

  it('should render', () => {
    expect(component).toBeTruthy();
  })

});
