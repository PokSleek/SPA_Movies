import React, { PureComponent } from 'react';

import './input.scss';

const blockName = 'input_default';

export default class Input extends PureComponent {
    static defaultProps = {
        defaultValue: '',
        placeholder: 'input',
    };

    render() {
        const { defaultValue, placeholder } = this.props;

        return <input
            className={blockName}
            placeholder={placeholder}
        >
            {defaultValue}
        </input>
    }
}
