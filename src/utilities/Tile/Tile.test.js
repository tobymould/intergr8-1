import React from "react";
import { shallow } from "enzyme";
import Tile from "./Tile";

describe("Stage1 component tests", () => {
  const data = {
    icon: "icon!",
  }

  const component = shallow(<Tile data={data} />);

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
