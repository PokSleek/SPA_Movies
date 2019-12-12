import React, { PureComponent } from 'react';

import MovieLabel from 'atoms/movie-label';

import './movies-container.scss';

const blockName = 'movies-container';

export default class MoviesContainer extends PureComponent {

    static defaultProps = {
        movies: [],
    };

    render() {
        const { movies, getMovie } = this.props;

        return (
            <div className={blockName}>
                {
                    movies.length ?
                        movies.map(movie =>
                            <MovieLabel
                                movie={movie}
                                key={movie.id}
                                getMovie={getMovie}
                            />) :
                        <p className={'no-content'}>
                            No films found
                        </p>
                }
            </div>
        );
    }
};
