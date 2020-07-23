import React from "react";
import { shallow } from "enzyme";
import TicketList from "./TicketList";
import { firestore } from '../../../../../firebase';


describe("ticket tile component tests", () => {
  let testComponent;

  beforeEach(() => {
    let data = () => {
      firestore
        .collection('tickets')
        .get()
        .then((querySnapshot) => querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        )
        .then(data => data.filter(doc => doc.id.length === 20 && doc.createdAtDate));
      return data;
    }
    testComponent = shallow(<TicketList data={data} />);
  })

  it("should render", () => {
    expect(testComponent).toBeTruthy();
  });
});
