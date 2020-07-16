import React from 'react';
import Column from './Column';
import { shallow } from 'enzyme';

describe("column component tests", () => {
    let testComponent;

    beforeEach(() => {
        testComponent = shallow(<Column/>);
    }) 

    it ('should render', () => {
        expect(testComponent).toBeTruthy();
    })

});