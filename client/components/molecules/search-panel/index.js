import React, { PureComponent } from 'react';

import RadioInput from 'atoms/radio-input';
import Button from 'atoms/button';
import Input from 'atoms/input';

import './search-panel.scss';

const blockName = 'search-panel';

const options = [
    {
        text: 'PHONE',
        value: 'phone',
    },
    {
        text: 'EMAIL',
        value: 'email',
    },
    {
        text: 'ANIME',
        value: 'anime',
    },
];

export default class SearchPanel extends PureComponent {

    static defaultProps = {
        options: [],
    };

    state = {
        selectedOption: this.props.selectedOption,
    };

    render() {
        return (
            <div className={blockName}>
                <RadioInput
                    options={options}
                    selectedOption={options[1].value}
                    description={'SEARCH BY'}
                />
                <Button
                    buttonText={'Anime'}
                />
                <Input/>
            </div>
        );
    }
};
