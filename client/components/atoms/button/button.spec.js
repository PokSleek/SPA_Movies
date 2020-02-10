import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';


describe('Button', () => {
    it('Button should render correctly', () => {
        const wrapper = shallow(<Button />);

        expect(wrapper).toMatchSnapshot();
    });
});
