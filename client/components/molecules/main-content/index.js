import React, { PureComponent } from 'react';

import SortPanel from 'molecules/sort-panel';
import MoviesContainer from 'molecules/movies-container';
import ContentFooter from 'molecules/content-footer';

import mock from 'mock/getMovies';
import { mockedResponse1 } from 'mock/getMovieById';

import './main-content.scss';

const blockName = 'main-content';

const options = [
    {
        text: 'RELEASE DATE',
        value: 'releaseDate',
    },
    {
        text: 'RATING',
        value: 'rating',
    },
];

export default class MainContent extends PureComponent {

    static defaultProps = {
        res: {},
    };

    state = {
        sortBy: 'releaseDate',
        res: {},
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                res: {
                    movies: mock.data,
                    limit: mock.limit,
                    offset: mock.offset,
                    total: mock.total,
                },
                film: mockedResponse1,
            })
        }, 500);
    }

    handleSortChange = value => {
        this.setState({
            sortBy: value,
        })
    };


    render() {
        const { sortBy, res: { movies }, film } = this.state;

        return (
            <div className={blockName}>
                <SortPanel
                    options={options}
                    value={sortBy}
                    handleChange={this.handleSortChange}
                />
                <MoviesContainer
                    movies={movies}
                    film={film}
                />
                <ContentFooter />
            </div>
        );
    }
};
