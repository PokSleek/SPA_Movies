import React from 'react';
import { shallow } from 'enzyme';

import Logo from './index';


describe('Logo', () => {
    it('Logo should render correctly', () => {
        const wrapper = shallow(<Logo />);

        expect(wrapper).toMatchSnapshot();
    });
});
