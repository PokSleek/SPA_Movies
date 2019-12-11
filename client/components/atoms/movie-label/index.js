import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';

import { getYearFromString } from 'utils'
import { genresParser} from './utils'

import './movie-label.scss';

const blockName = 'movie-label';


export default class MovieLabel extends PureComponent {

    genresParser = memoizeOne(genresParser);

    getYear = memoizeOne(getYearFromString);

    render() {
        const {
            imageUrl,
            releaseDate,
            genres,
            title
        } = this.props;

        return (
            <div className={`${blockName}`}>
                <img
                    className={`${blockName}__poster`}
                    src={imageUrl}
                    alt={title}
                />
                <div className={`${blockName}__description`}>
                    <p className={`${blockName}__description__title`}>
                        <span className={`${blockName}__description__year`}>
                            {this.getYear(releaseDate)}
                        </span>
                        {title}
                    </p>
                    <p className={`${blockName}__description__genre`}>{this.genresParser(genres)}</p>
                </div>
            </div>
        );
    }
};
