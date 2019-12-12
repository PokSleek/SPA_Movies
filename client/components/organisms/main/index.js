import React, { PureComponent, Fragment } from 'react';

import Header from 'organisms/header';
import MainContent from 'molecules/main-content';
import ErrorBoundary from 'atoms/error-boundary'
import mock from 'mock/getMovies';

import { smoothScrollTo } from 'utils';

export default class Main extends PureComponent {

    state = {
        moviesData: {
            movies: [],
            limit: '',
            offset: '',
            total: 0,
        },
        film: null,
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
            })
        }, 500);
    }

    getMovie = film => {
        this.setState({
            film,
        });
        smoothScrollTo(document.body.querySelector('.header'));
    };

    goBack = () => {
        this.setState({
            film: null
        });
    };

    render() {
        const {
            moviesData: { movies },
            film,
        } = this.state;

        return (
            <Fragment>
                <ErrorBoundary>
                    <Header
                        film={film}
                        goBack={this.goBack}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <MainContent
                        getMovie={this.getMovie}
                        movies={movies}
                    />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

