import React, { PureComponent } from 'react';

import MainContent from 'organisms/main-content';

export default class BaseLayout extends PureComponent {

    render() {
        return <div className={'base-layout'}>
            <MainContent/>
        </div>
    }
}
