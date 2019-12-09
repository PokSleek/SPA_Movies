import React, { PureComponent } from 'react';

import './logo.scss';

const blockName = 'logo';

export default class Logo extends PureComponent {
    render() {
        return (
                <span className={blockName}>
                    <span className={`${blockName}__bold`}>netflix</span>roulette
                </span>
        );
    }
};
