import React, { PureComponent } from 'react';

import MainContent from 'organisms/main-content';

import './base-layout.scss';

const blockName = 'base-layout';

export default class BaseLayout extends PureComponent {

    render() {
        return <div className={blockName}>
            <MainContent/>
        </div>
    }
}
