import React, { PureComponent } from 'react';

import MovieLabel from 'atoms/movie-label';

import './movies-container.scss';

const blockName = 'movies-container';

export default class MoviesContainer extends PureComponent {

    static defaultProps = {
        film: {},
        movies: [],
    };

    render() {
        const { movies } = this.props;

        return (
            <div className={blockName}>
                {
                    movies.length ?
                        movies.map(movie =>
                            <MovieLabel
                                key={movie.id}
                                imageUrl={movie.poster_path}
                                releaseDate={movie.release_date}
                                genres={movie.genres}
                                title={movie.title}
                            />) :
                        <p className={'no-content'}>
                            No films found
                        </p>
                }
            </div>
        );
    }
};
