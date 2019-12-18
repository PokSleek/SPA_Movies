import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom'
import qs from 'query-string';
import pickBy from 'lodash/pickBy';

import SearchPanel from 'molecules/search-panel';
import MovieInfo from 'molecules/movie-info';
import Navigation from 'molecules/navigation';
import SortPanel from 'molecules/sort-panel';

import './header.scss';
import memoizeOne from "memoize-one";


const blockName = 'header';

const searchOptions = [
    {
        text: 'TITLE',
        value: 'title',
    },
    {
        text: 'GENRE',
        value: 'genres',
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
        searchParams: {},
    };

    state = {
        search: this.props.searchParams.search,
        searchBy: this.props.searchParams.searchBy,
        sortBy: this.props.searchParams.sortBy,
    };

    queryParser = memoizeOne(({ search, searchBy, sortBy }) =>
        qs.stringify(
            pickBy({
                search,
                searchBy,
                sortBy,
            }, value => value))
    );

    handleChange = field => value => {
        this.setState({
            [field]: value,
        });
    };

    onSubmit = () => {
        const { onSubmit, changeHistory } = this.props;
        const { searchBy, search, sortBy } = this.state;

        onSubmit({
            searchBy,
            search,
            sortBy,
        });
    };

    render() {
        const {
            film,
            onGoBack,
            searchParams,
        } = this.props;

        const {
            search,
            searchBy,
            sortBy,
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
                        redirectTo={{
                            pathname: '/search',
                            search: this.queryParser(searchParams),
                        }}
                    />
                    <Switch>
                        <Route path='/film/:id'>
                            <MovieInfo
                                film={film}
                            />
                        </Route>
                        <Route path="/search">
                            <SearchPanel
                                handleChangeSearch={this.handleChange('search')}
                                handleChangeSearchBy={this.handleChange('searchBy')}
                                searchOptions={searchOptions}
                                searchValue={search}
                                searchByDescription={'SEARCH BY'}
                                searchBy={searchBy}
                                onSubmit={this.onSubmit}
                            />
                        </Route>
                    </Switch>
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
