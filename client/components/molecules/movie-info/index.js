import React, { PureComponent } from 'react';
import memoizeOne from 'memoize-one';

import { getYearFromString } from 'utils'

import './movie-info.scss';


const blockName = 'movie-info';


export default class MovieInfo extends PureComponent {

    getYear = memoizeOne(getYearFromString);

    render() {
        if (this.props.film) {
            const {
                film: {
                    title,
                    poster_path,
                    vote_average,
                    runtime,
                    release_date,
                    overview
                },
            } = this.props;

            return (
                <div className={blockName}>
                    <div className={`${blockName}__poster`}>
                        <img
                            src={poster_path}
                            alt={title}
                        />
                    </div>
                    <div className={`${blockName}__content`}>
                        <div className={`${blockName}__content__first-row`}>
                            <h1 className={`${blockName}__content__first-row__title`}>{title}</h1>
                            <p className={`${blockName}__content__first-row__rating`}>
                                <span>{vote_average}</span>
                            </p>
                        </div>
                        <div className={`${blockName}__content__second-row`}>
                            <p className={`${blockName}__content__second-row__year`}>{this.getYear(release_date)}</p>
                            {
                                runtime ?
                                    <p className={`${blockName}__content__second-row__runtime`}>{runtime} min</p> :
                                    null
                            }
                        </div>
                        <p className={`${blockName}__content__description`}>
                            {
                                overview ?
                                    overview :
                                    null
                            }
                        </p>
                    </div>
                </div>
            );
        }
        return null;
    }
};
