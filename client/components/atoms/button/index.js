import React, { PureComponent } from 'react';

import './button.scss';

const blockName = 'button-default';

export default class Button extends PureComponent {
    static defaultProps = {
        buttonText: 'BUTTON',
    };

    render() {
        const { buttonText } = this.props;

        return <button className={blockName}>
            {buttonText.toUpperCase()}
        </button>
    }
};
