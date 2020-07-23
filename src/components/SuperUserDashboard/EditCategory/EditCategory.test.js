import React from "react";
import { shallow } from "enzyme";
import EditCategory from "./EditCategory";

describe("Stage1 component tests", () => {
  const component = shallow(<EditCategory 
    setCategoriesState={()=> {console.log('function')}}
    addSubcategory={()=> {console.log('function')}}
    removeSubcategory={()=> {console.log('function')}}
    categories={[{
      queries: ['test'],
      title: 'test'
    }]} />, { disableLifecycleMethods: true });

  it("should render", () => {
    expect(component).toBeTruthy();
  });
});
