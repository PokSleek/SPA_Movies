import React, { PureComponent, Fragment } from 'react';

import SearchBlock from 'molecules/search-block';
import MainContent from 'molecules/main-content';

export default class Main extends PureComponent {

    render() {
        return (
            <Fragment>
                <SearchBlock />
                <MainContent />
            </Fragment>
        )
    }
}

