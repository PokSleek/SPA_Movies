import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';


describe('Header', () => {
    it('Header should render correctly', () => {
        const wrapper = shallow(<Header queryParser={()=>{}}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
