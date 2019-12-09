import React, { PureComponent } from 'react';

import './button.scss';

const blockName = 'button_default';

export default class Button extends PureComponent {
    static defaultProps = {
        buttonText: 'button',
    };

    render() {
        const { buttonText } = this.props;

        return <button className={blockName}>
            {buttonText}
        </button>
    }
}
