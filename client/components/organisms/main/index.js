import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import Header from 'organisms/header';
import MainContent from 'molecules/main-content';
import ErrorBoundary from 'atoms/error-boundary';
import { getMovies, getFilm } from 'store/thunks/movies';
import { setFilm } from 'store/actions/movies';

import { smoothScrollTo } from 'utils';

class Main extends PureComponent {

    static defaultProps = {
        movies: {
            data: [],
            total: 0,
        },
        film: null,
    };

    componentDidMount() {
        this.getMovies();
    }

    getMovies = params => {
        const { getMovies } = this.props;
        getMovies(params)
    };

    getMovieById = id => {
        const { getFilm } = this.props;
        getFilm(id)
            .then(() => {
                smoothScrollTo(document.body.querySelector('.header'));
            });
    };

    goBack = () => {
        const { setFilm } = this.props;
        setFilm(null);
    };

    render() {
        const { movies: { data, total }, film } = this.props;

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

export default connect(
    ({ movies }) => {
        return {
            movies: movies.movies,
            film: movies.film,
        }
    },
    { getMovies, getFilm, setFilm }
)(Main);
