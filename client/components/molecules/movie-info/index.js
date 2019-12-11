import React, { PureComponent } from 'react';

import './movie-info.scss';

const blockName = 'movie-info';


export default class MovieInfo extends PureComponent {
    render() {
        const {
            tittle,
        } = this.props;

        return (
            <div className={blockName}>
                <div className={`${blockName}__poster`}>

                </div>
                <div className={`${blockName}__content`}>

                </div>

            </div>
        );
    }
};
