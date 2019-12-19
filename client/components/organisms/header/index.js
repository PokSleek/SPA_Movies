import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom'

import SearchPanel from 'molecules/search-panel';
import MovieInfo from 'molecules/movie-info';
import Navigation from 'molecules/navigation';
import SortPanel from 'molecules/sort-panel';

import './header.scss';



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
        value: 'release_date',
    },
    {
        text: 'RATING',
        value: 'vote_average',
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


    handleChange = field => value => {
        this.setState({
            [field]: value,
        });
    };

    onSubmit = () => {
        const { onSubmit, changeHistory } = this.props;
        const { searchBy, search, sortBy } = this.state;

        changeHistory('/search', {searchBy, search, sortBy});

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
            queryParser,
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
                            search: queryParser(searchParams),
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
