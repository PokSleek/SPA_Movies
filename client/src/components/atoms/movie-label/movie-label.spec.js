import React from 'react';
import { shallow } from 'enzyme';

import MovieLabel from './index';


describe('MovieLabel', () => {
    it('MovieLabel should render correctly', () => {
        const wrapper = shallow(<MovieLabel movie={{}}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
