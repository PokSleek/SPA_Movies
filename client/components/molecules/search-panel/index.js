import React, { PureComponent } from 'react';

import RadioInput from 'atoms/radio-input';
import Button from 'atoms/button';
import Input from 'atoms/input';

import './search-panel.scss';

const blockName = 'search-panel';


export default class SearchPanel extends PureComponent {

    static defaultProps = {
        searchOptions: [],
        sortOptions: [],
        searchValue: '',
    };

    render() {
        const {
            searchOptions,
            searchValue,
            searchBy,
            handleChangeSearch,
            handleChangeSearchBy,
            onSubmit,
            searchByDescription
        } = this.props;

        return (
            <div className={blockName}>
                <p className={`${blockName}__title`}>{'FIND YOUR MOVIE'}</p>
                <div className={`${blockName}__input-field`}>
                    <Input
                        placeholder={'Search'}
                        value={searchValue}
                        handleChange={handleChangeSearch}
                    />
                    <Button
                        buttonText={'SEARCH'}
                        onClick={onSubmit}
                    />
                </div>
                <div className={`${blockName}__sorting-field`}>
                    <RadioInput
                        options={searchOptions}
                        value={searchBy}
                        description={searchByDescription}
                        handleChange={handleChangeSearchBy}
                    />
                </div>
            </div>
        );
    }
};
