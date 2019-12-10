import React, { PureComponent } from 'react';

import SortPanel from 'molecules/sort-panel';
import MoviesContainer from 'molecules/movies-container';
import ContentFooter from 'molecules/content-footer';

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

    state = {
        sortBy: 'releaseDate',
    };

    handleSortChange = value => {
        this.setState({
            sortBy: value,
        })
    };


    render() {
        const { sortBy } = this.state;

        return (
            <div className={blockName}>
                <SortPanel
                    options={options}
                    value={sortBy}
                    handleChange={this.handleSortChange}
                />
                <MoviesContainer />
                <ContentFooter />
            </div>
        );
    }
};
