import React, { PureComponent, Fragment } from 'react';

import Header from 'organisms/header';
import MainContent from 'molecules/main-content';
import ErrorBoundary from 'atoms/error-boundary';
import { getMovies, getMovieById } from 'core/api/requests';

import { smoothScrollTo } from 'utils';

export default class Main extends PureComponent {

    state = {
        movies: {
            data: [],
            limit: '',
            offset: '',
            total: 0,
        },
        film: null,
    };

    componentDidMount() {
        this.getMovies();
    }

    getMovies = params => {
        getMovies(params)
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    movies: data,
                })
            });
    };

    getMovieById = id => {
        getMovieById(id)
            .then(({ data }) => {
                this.setState({
                    film: data,
                });
                smoothScrollTo(document.body.querySelector('.header'));
            });
    };

    goBack = () => {
        this.setState({
            film: null
        });
    };

    render() {
        const {
            movies: { data },
            film,
        } = this.state;

        return (
            <Fragment>
                <ErrorBoundary>
                    <Header
                        film={film}
                        onSubmit={this.getMovies}
                        onGoBack={this.goBack}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <MainContent
                        getMovie={this.getMovieById}
                        movies={data}
                    />
                </ErrorBoundary>
            </Fragment>
        )
    }
}

