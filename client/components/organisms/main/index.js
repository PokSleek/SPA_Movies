import React, { PureComponent, Fragment } from 'react';

import Header from 'organisms/header';
import MainContent from 'molecules/main-content';

export default class Main extends PureComponent {

    render() {
        return (
            <Fragment>
                <Header
                    isMovieDetails={true}
                />
                <MainContent />
            </Fragment>
        )
    }
}

