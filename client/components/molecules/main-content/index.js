import React, { PureComponent } from 'react';

import MoviesContainer from 'molecules/movies-container';
import ContentFooter from 'atoms/content-footer';

import './main-content.scss';

const blockName = 'main-content';


export default class MainContent extends PureComponent {

    render() {
        const { movies } = this.props;

        return (
            <div className={blockName}>
                <MoviesContainer
                    movies={movies}
                />
                <ContentFooter />
            </div>
        );
    }
};
