import React, { PureComponent } from 'react';

import Main from 'organisms/main';

import './base-layout.scss';

const blockName = 'base-layout';

export default class BaseLayout extends PureComponent {

    render() {
        return <div className={blockName}>
            <Main/>
        </div>
    }
}
