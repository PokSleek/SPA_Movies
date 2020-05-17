import React from 'react';
import { shallow } from 'enzyme';

import Input from './index';


describe('Input', () => {
    it('Input should render correctly', () => {
        const wrapper = shallow(<Input />);

        expect(wrapper).toMatchSnapshot();
    });
});
