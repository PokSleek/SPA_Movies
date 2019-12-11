import React, { PureComponent } from 'react';

import MoviesContainer from 'molecules/movies-container';
import ContentFooter from 'atoms/content-footer';

import mock from 'mock/getMovies';
import { mockedResponse1 } from 'mock/getMovieById';

import './main-content.scss';

const blockName = 'main-content';


export default class MainContent extends PureComponent {

    static defaultProps = {
        res: {},
    };

    state = {
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


    render() {
        const { res: { movies }, film } = this.state;

        return (
            <div className={blockName}>
                <MoviesContainer
                    movies={movies}
                    film={film}
                />
                <ContentFooter />
            </div>
        );
    }
};
