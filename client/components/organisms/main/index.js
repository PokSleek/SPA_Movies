import React, { PureComponent, Fragment } from 'react';

import Header from 'organisms/header';
import MainContent from 'molecules/main-content';
import ErrorBoundary from 'atoms/error-boundary'
import mock from 'mock/getMovies';
import { mockedResponse1 } from 'mock/getMovieById';

export default class Main extends PureComponent {

    state = {
        moviesData: {
            movies: [],
            limit: '',
            offset: '',
            total: 0,
        },
        isMovieDetails: true,
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                moviesData: {
                    movies: mock.data,
                    limit: mock.limit,
                    offset: mock.offset,
                    total: mock.total,
                },
                film: mockedResponse1,
            })
        }, 500);
    }

    render() {
        const {
            moviesData: { movies },
            film,
            isMovieDetails
        } = this.state;

        return (
            <Fragment>
                <ErrorBoundary>
                    <Header
                        isMovieDetails={isMovieDetails}
                        film={film}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <MainContent
                        movies={movies}
                    />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

