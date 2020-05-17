import React from 'react';
import { shallow } from 'enzyme';

import MainContent from './index';


describe('MainContent', () => {
    it('MainContent should render correctly', () => {
        const wrapper = shallow(<MainContent movie={{}}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
