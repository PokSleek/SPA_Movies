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

    state = {
        search: '',
        searchBy: 'title',
        sortBy: 'releaseDate',
    };

    handleChange = field => value => {
        this.setState({
            [field]: value,
        });
    };

    onSubmit = () => {
        const { onSubmit } = this.props;
        const { searchBy, search, sortBy } = this.state;

        onSubmit({
            searchBy,
            search,
            sortBy,
        });
    };

    render() {
        const { film, onGoBack } = this.props;
        const {
            search,
            searchBy,
            sortBy
        } = this.state;

        if (search === 'ERROR-BOUNDARY') {
            throw new Error('error');
        }

        return (
            <div className={blockName}>
                <div className={`${blockName}__bg`}>
                    <Navigation
                        isBack={!!film}
                        onClickBackBtn={onGoBack}
                    />
                    {film ?
                        <MovieInfo
                            film={film}
                        /> :
                        <SearchPanel
                            handleChangeSearch={this.handleChange('search')}
                            handleChangeSearchBy={this.handleChange('searchBy')}
                            searchOptions={searchOptions}
                            searchValue={search}
                            searchByDescription={'SEARCH BY'}
                            searchBy={searchBy}
                            onSubmit={this.onSubmit}
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
