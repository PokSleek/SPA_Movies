import React, { PureComponent } from 'react';

import RadioInput from 'atoms/radio-input';
import Button from 'atoms/button';
import Input from 'atoms/input';

import './search-panel.scss';

const blockName = 'search-panel';


export default class SearchPanel extends PureComponent {

    static defaultProps = {
        options: [],
        value: {},
    };

    state = {
        value: {
            search: this.props.value.search,
            searchBy: this.props.value.searchBy,
        }
    };

    handleChange = field => value => {
        this.setState({
            value: {
                ...this.state.value,
                [field]: value,
            },
        });
    };

    render() {
        const { options } = this.props;
        const { search, searchBy } = this.state.value;

        return (
            <div className={blockName}>
                <p className={`${blockName}__title`}>{'FIND YOUR MOVIE'}</p>
                <div className={`${blockName}__input-field`}>
                    <Input
                        placeholder={'Search'}
                        value={search}
                        handleChange={this.handleChange('search')}
                    />
                    <Button
                        buttonText={'SEARCH'}
                    />
                </div>
                <div className={`${blockName}__sorting-field`}>
                    <RadioInput
                        options={options}
                        value={searchBy}
                        description={'SEARCH BY'}
                        handleChange={this.handleChange('searchBy')}
                    />
                </div>
            </div>
        );
    }
};
