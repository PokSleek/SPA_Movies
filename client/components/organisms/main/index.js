import React, { PureComponent, Fragment } from 'react';

import Header from 'organisms/header';
import MainContent from 'molecules/main-content';
import ErrorBoundary from 'atoms/error-boundary'

export default class Main extends PureComponent {

    render() {
        return (
            <Fragment>
                <ErrorBoundary>
                    <Header
                        isMovieDetails={true}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <MainContent />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

