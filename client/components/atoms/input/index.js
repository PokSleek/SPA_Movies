import React, { PureComponent } from 'react';

import './input.scss';

const blockName = 'input-default';

export default class Input extends PureComponent {
    static defaultProps = {
        defaultValue: '',
        placeholder: 'kekek',
    };

    state = {
        value: this.props.defaultValue,
    };

    handleChange = event => {
        this.setState({
            value: event.target.value,
        })
    };

    render() {
        const { placeholder } = this.props;
        const { value } = this.state;

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
