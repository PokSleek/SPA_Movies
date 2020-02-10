import React, { PureComponent } from 'react';

import MoviesContainer from '../movies-container';
import ContentFooter from '../../atoms/content-footer';

import './main-content.scss';

const blockName = 'main-content';


export default class MainContent extends PureComponent {

    render() {
        const { movies, getMovie } = this.props;

        return (
            <div className={blockName}>
                <MoviesContainer
                    getMovie={getMovie}
                    movies={movies}
                />
                <ContentFooter />
            </div>
        );
    }
};
