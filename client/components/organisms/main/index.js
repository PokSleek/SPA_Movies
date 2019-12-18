import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import get from 'lodash/get';
import filter from 'lodash/filter';


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
        const { location: { pathname }, match: { params }, getFilm } = this.props;
        if (pathname.includes('film')) {
            getFilm(params)
        }
        this.getMovies(this.props.searchParams);
    }

    changeHistory = (path, pathParams, query) => {
        const { history } = this.props;
        history.push(`${path}/${pathParams}${qs.stringify(query)}`);
    };

    getMovies = params => {
        const { getMovies } = this.props;
        getMovies(params)
    };

    getMovieById = id => {
        const { getFilm } = this.props;
        this.changeHistory('/film', id.id);
        getFilm(id)
            .then(() => {
                smoothScrollTo(document.body.querySelector('.header'));
            });
    };

    goBack = () => {
        const { setFilm } = this.props;
        setFilm(null);
    };

    headerOnSubmit = params => {
        /// need action to update searchParams
        this.getMovies(params);
        this.changeHistory()
    };

    render() {
        const {
            movies: {
                data,
                total,
            },
            film,
            searchParams,
            match: {
                params: {
                    id
                }
            },
        } = this.props;

        return (
            <Fragment>
                <ErrorBoundary>
                    <Header
                        searchParams={searchParams}
                        film={film}
                        onSubmit={this.getMovies}
                        onGoBack={this.goBack}
                        filmId={id}
                        changeHistory={this.changeHistory}
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
    ({ movies }, { location }) => {
        const parsedQuery = qs.parse(location.search);
        return {
            movies: movies.movies,
            film: movies.film,
            searchParams: {
                search: get(parsedQuery, 'search', ''),
                searchBy: get(parsedQuery, 'searchBy', 'title'),
                sortBy: get(parsedQuery, 'sortBy', 'releaseDate'),
            },
        }
    },
    { getMovies, getFilm, setFilm }
)(Main);
