import React from "react";
import { shallow } from "enzyme";
import TicketList from "./TicketList";


describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    let data = [
      {
        id: "iuhiuhIUH"
      },
      { id: "iuhiuhIUH" },
      { id: "iuhiuhIUH" }
    ];
    testComponent = shallow(<TicketList data={data} />);
  });


  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
