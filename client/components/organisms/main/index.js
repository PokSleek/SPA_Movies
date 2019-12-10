import React, { PureComponent, Fragment } from 'react';

import SearchBlock from 'molecules/search-block';
import MoviesContainer from 'molecules/movies-container';

export default class MainContent extends PureComponent {

    render() {
        return (
            <Fragment>
                <SearchBlock />
                <MoviesContainer />
            </Fragment>
        )
    }
}

