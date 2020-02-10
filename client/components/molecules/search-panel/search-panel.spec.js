import React from 'react';
import { shallow } from 'enzyme';

import SearchPanel from './index';


describe('SearchPanel', () => {
    it('SearchPanel should render correctly', () => {
        const wrapper = shallow(<SearchPanel />);

        expect(wrapper).toMatchSnapshot();
    });
});
