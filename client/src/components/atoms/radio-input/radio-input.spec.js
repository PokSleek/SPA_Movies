import React from 'react';
import { shallow } from 'enzyme';

import RadioInput from './index';


describe('RadioInput', () => {
    it('RadioInput should render correctly', () => {
        const wrapper = shallow(<RadioInput />);

        expect(wrapper).toMatchSnapshot();
    });
});
