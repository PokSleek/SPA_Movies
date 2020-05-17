import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './index';


describe('Navigation', () => {
    it('Navigation should render correctly', () => {
        const wrapper = shallow(<Navigation />);

        expect(wrapper).toMatchSnapshot();
    });
});
