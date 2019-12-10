import React, { PureComponent } from 'react';
import noop from 'lodash/noop';

import './input.scss';

const blockName = 'input-default';

export default class Input extends PureComponent {
    static defaultProps = {
        placeholder: '',
        handleChange: noop,
    };

    handleChange = event => {
        const { handleChange } = this.props;
        const { value } = event.target;

        handleChange(value);
    };

    render() {
        const { placeholder, value } = this.props;

        return (
            <input
                className={blockName}
                placeholder={placeholder}
                value={value}
                onChange={this.handleChange}
            />
        )
    }
}
