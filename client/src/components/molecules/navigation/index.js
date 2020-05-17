import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import Logo from '../../atoms/logo'

import './navigation.scss';

const blockName = 'navigation';


export default class Navigation extends PureComponent {
    render() {
        const { isBack, onClickLogo, onClickBackBtn, redirectTo } = this.props;

        return (
            <div className={blockName}>
                <Logo onClick={onClickLogo} />
                {isBack ?
                    <p
                        className={`${blockName}__back-btn`}
                        onClick={onClickBackBtn}
                    >
                        <Link to={redirectTo}>
                            Back to search page
                        </Link>
                    </p> :
                    null}
            </div>
        );
    }
};
