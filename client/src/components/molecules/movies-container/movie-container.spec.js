import React from 'react';
import { shallow } from 'enzyme';

import MoviesContainer from './index';


describe('MoviesContainer', () => {
    it('MoviesContainer should render correctly', () => {
        const wrapper = shallow(<MoviesContainer movie={{}}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
