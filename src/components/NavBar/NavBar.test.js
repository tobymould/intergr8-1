import React from "react";
import { shallow } from "enzyme";
import NavBar from "./NavBar";

describe("Stage1 component tests", () => {
  const key = [
    { title: '[View Ticket]',
      link: "/viewticket"
    },{
      title: '[Create Ticket]',
      link: "/createticket"
    },{
      title: 'Dashboard',
      link: '/dashboard'
    },{
      title: 'Ticket',
      link: '/ticket'
    },{
      title: 'Logout',
      link: '/'
    }
  ]
  const component = shallow(<NavBar key={key} />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
