import React, { PureComponent } from 'react';

import './button.scss';

const blockName = 'button-default';

export default class Button extends PureComponent {
    static defaultProps = {
        buttonText: 'BUTTON',
    };

    render() {
        const { buttonText, onClick } = this.props;

        return <button
            className={blockName}
            onClick={onClick}
        >
            {buttonText.toUpperCase()}
        </button>
    }
};
