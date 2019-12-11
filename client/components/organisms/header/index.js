import React, { PureComponent } from 'react';
import noop from 'lodash/noop';

import SearchPanel from 'molecules/search-panel';
import MovieInfo from 'molecules/movie-info';
import Navigation from 'molecules/navigation';
import SortPanel from "molecules/sort-panel";

import './header.scss';


const blockName = 'header';

const searchOptions = [
    {
        text: 'TITLE',
        value: 'title',
    },
    {
        text: 'GENGRE',
        value: 'gengre',
    },
];

const sortOptions = [
    {
        text: 'RELEASE DATE',
        value: 'releaseDate',
    },
    {
        text: 'RATING',
        value: 'rating',
    },
];


export default class Header extends PureComponent {

    static defaultProps = {
        options: [],
        value: {},
    };

    state = {
        searchValue: '',
        searchBy: 'title',
        sortBy: 'releaseDate',
        isMovieDetails: this.props.isMovieDetails,
    };

    handleChange = field => value => {
        this.setState({
            [field]: value,
        });
    };

    onClickGoBack = () => this.setState({ isMovieDetails: !this.state.isMovieDetails });

    render() {
        const {
            searchValue,
            searchBy,
            sortBy,
            isMovieDetails
        } = this.state;

        if (searchValue === 'ERROR') {
            throw new Error('error');
        }

        return (
            <div className={blockName}>
                <div className={`${blockName}__bg`}>
                    <Navigation
                        isBack={isMovieDetails}
                        onClickLogo={this.onClickGoBack}
                        onClickBackBtn={this.onClickGoBack}
                    />
                    {isMovieDetails ?
                        <MovieInfo /> :
                        <SearchPanel
                            handleChangeSearch={this.handleChange('searchValue')}
                            handleChangeSearchBy={this.handleChange('searchBy')}
                            searchOptions={searchOptions}
                            searchValue={searchValue}
                            searchByDescription={'SEARCH BY'}
                            searchBy={searchBy}
                            onSubmit={noop}
                        />
                    }
                </div>
                <SortPanel
                    sortOptions={sortOptions}
                    value={sortBy}
                    description={'SORT BY'}
                    handleChange={this.handleChange('sortBy')}
                />
            </div>
        );
    }
};
