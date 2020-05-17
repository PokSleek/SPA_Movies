import React from 'react';
import { shallow } from 'enzyme';

import MovieInfo from './index';


describe('MovieInfo', () => {
    it('MovieInfo should render correctly', () => {
        const wrapper = shallow(<MovieInfo movie={{}}/>);

        expect(wrapper).toMatchSnapshot();
    });
});
