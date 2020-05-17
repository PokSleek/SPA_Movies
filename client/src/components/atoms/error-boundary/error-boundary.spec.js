import React from 'react';
import { shallow } from 'enzyme';

import ErrorBoundary from './index';


describe('ErrorBoundary', () => {
    it('ErrorBoundary should render correctly', () => {
        const wrapper = shallow(<ErrorBoundary />);

        expect(wrapper).toMatchSnapshot();
    });
});
