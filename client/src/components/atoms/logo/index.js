import React, { PureComponent } from 'react';

import './logo.scss';

const blockName = 'logo';

export default class Logo extends PureComponent {
    render() {
        const { onClick } = this.props;
        return (
                <p
                    className={blockName}
                    onClick={onClick}
                >
                    <span className={`${blockName}__bold`}>netflix</span>roulette
                </p>
        );
    }
};
