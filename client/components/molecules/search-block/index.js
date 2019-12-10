import React, { PureComponent } from 'react';

import SearchPanel from 'molecules/search-panel';
import Logo from 'atoms/logo';

import './search-block.scss';

const blockName = 'search-block';

export default class SearchBlock extends PureComponent {

    render() {
        return (
            <div className={blockName}>
                <Logo />
                <SearchPanel />
            </div>
        );
    }
};
