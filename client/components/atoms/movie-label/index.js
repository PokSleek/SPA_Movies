import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';

import { getYearFromString } from 'utils'
import { genresParser} from './utils'

import './movie-label.scss';

const blockName = 'movie-label';


export default class MovieLabel extends PureComponent {

    genresParser = memoizeOne(genresParser);
    getYear = memoizeOne(getYearFromString);

    getMovie = () => {
        const { getMovie, movie } = this.props;
        console.log(movie, getMovie);
        getMovie(movie);
    };

    render() {
        const { movie } = this.props;
        const {
            poster_path,
            release_date,
            genres,
            title,
        } = movie;

        return (
            <div className={`${blockName}`}>
                <img
                    className={`${blockName}__poster`}
                    src={poster_path}
                    alt={title}
                    onClick={this.getMovie}
                />
                <div className={`${blockName}__description`}>
                    <p className={`${blockName}__description__title`}>
                        <span className={`${blockName}__description__year`}>
                            {this.getYear(release_date)}
                        </span>
                        {title}
                    </p>
                    <p className={`${blockName}__description__genre`}>{this.genresParser(genres)}</p>
                </div>
            </div>
        );
    }
};
