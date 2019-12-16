import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import Main from 'organisms/main';
import { store } from 'store/store';

import './base-layout.scss';

const blockName = 'base-layout';

export default class BaseLayout extends PureComponent {

    render() {
        return (
            <Provider store={store}>
                <div className={blockName}>
                    <Main/>
                </div>
            </Provider>
        );
    }
}
