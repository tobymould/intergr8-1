import React from "react";
import { shallow } from "enzyme";
import TicketTile from "./TicketTile";

describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    testComponent = shallow(<TicketTile ticket={{ ID: "Woivoeriheowpecjewffwhkjh", createdBy: "David", createdAtDate: "02/02/2020" }} />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
