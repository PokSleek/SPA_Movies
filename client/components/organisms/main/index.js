import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import memoizeOne from 'memoize-one';
import get from 'lodash/get';
import pickBy from 'lodash/pickBy';
import sample from 'lodash/sample';


import Header from '../header';
import MainContent from '../../molecules/main-content';
import ErrorBoundary from '../../atoms/error-boundary';
import { getMovies, getFilm } from '../../../store/thunks/movies';
import { setFilm } from '../../../store/actions/movies';
import { smoothScrollTo } from '../../../utils';

const defaultFilters = {
    search: '',
    searchBy: 'title',
    sortBy: 'release_date',
};

export class Main extends PureComponent {

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
                .then(({ payload }) => {
                    this.genre = sample(payload.genres);
                    this.getMovies({ filter: this.genre });
                })
        } else {
            this.getMovies(this.props.searchParams);
        }
    }

    queryParser = memoizeOne(({ search, searchBy, sortBy } = {}) =>
        qs.stringify(
            pickBy({
                search,
                searchBy,
                sortBy,
          }, (value, key) => value !== defaultFilters[key]))
    );

    changeHistory = (path, query) => {
        const { history } = this.props;
        history.push(`${path}?${this.queryParser(query)}`);
    };

    getMovies = params => {
        const { getMovies } = this.props;
        getMovies(params)
    };

    onClickMovie = movie => {
        const { getFilm, film } = this.props;
        this.changeHistory(`/film/${movie.id}`);
        getFilm(movie)
            .then(data => {
                smoothScrollTo(document.body.querySelector('.header'));
                return data
            })
            .then(({ payload }) => {
                    this.genre = sample(payload.genres);
                    this.getMovies({
                        filter: this.genre,
                    });
                }
            );
    };

    goBack = () => {
        const { setFilm } = this.props;
        this.genre = null;
        setFilm(null);
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
                        filmGenre={this.genre}
                        changeHistory={this.changeHistory}
                        queryParser={this.queryParser}
                        total={total}
                    />
                </ErrorBoundary>
                <ErrorBoundary>
                    <MainContent
                        getMovie={this.onClickMovie}
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
                sortBy: get(parsedQuery, 'sortBy', 'release_date'),
            },
        }
    },
    { getMovies, getFilm, setFilm }
)(Main);
