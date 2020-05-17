import React from 'react';
import { shallow } from 'enzyme';

import { Main } from './index';


describe('Main', () => {
    it('Main should render correctly', () => {
        const wrapper = shallow(<Main
            match={{params: {}}}
            location={{pathname: ''}}
            getMovies={()=>{}}
        />);

        expect(wrapper).toMatchSnapshot();
    });
});
