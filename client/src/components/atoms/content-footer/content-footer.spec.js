import React from 'react';
import { shallow } from 'enzyme';

import SortPanel from './index';


describe('SortPanel', () => {
    it('SortPanel should render correctly', () => {
        const wrapper = shallow(<SortPanel />);

        expect(wrapper).toMatchSnapshot();
    });
});
