import React, { PureComponent } from 'react';

import RadioInput from 'atoms/radio-input';

const options = [
    {
        text: 'PHONE',
        value: 'phone',
    },
    {
        text: 'EMAIL',
        value: 'email',
    }
];
export default class MainContent extends PureComponent {

    render() {
        return <div>
            <RadioInput
                options={options}
                selectedOption={options[1].value}
            />
        </div>
    }
}
