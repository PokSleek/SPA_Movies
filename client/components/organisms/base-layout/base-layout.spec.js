import React from 'react';
import { shallow } from 'enzyme';

import BaseLayout from './index';


describe('BaseLayout', () => {
    it('BaseLayout should render correctly', () => {
        const wrapper = shallow(<BaseLayout />);

        expect(wrapper).toMatchSnapshot();
    });
});
