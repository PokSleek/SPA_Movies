import React, { PureComponent } from 'react';

import Logo from 'atoms/logo';

import './content-footer.scss';

const blockName = 'content-footer';


export default class SortPanel extends PureComponent {
    render() {
        return (
            <div className={blockName}>
                <Logo />
            </div>
        );
    }
};
