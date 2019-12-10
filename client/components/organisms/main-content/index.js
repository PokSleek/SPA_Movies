import React, { PureComponent, Fragment } from 'react';

import SearchBlock from 'molecules/search-block';

export default class MainContent extends PureComponent {

    render() {
        return (
            <Fragment>
                <SearchBlock />
            </Fragment>
        )
    }
}

