import React, { PureComponent } from 'react';

import Logo from 'atoms/logo'

import './navigation.scss';

const blockName = 'navigation';


export default class Navigation extends PureComponent {
    render() {
        const { isBack, onClickLogo, onClickBackBtn } = this.props;

        return (
            <div className={blockName}>
                <Logo onClick={onClickLogo} />
                {isBack ?
                    <p
                        className={`${blockName}__back-btn`}
                        onClick={onClickBackBtn}
                    >
                        Back to search page
                    </p> :
                    null}
            </div>
        );
    }
};
