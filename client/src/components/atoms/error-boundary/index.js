import React, { PureComponent } from 'react';

import './error-boundary.scss';

const blockName = 'error-boundary';

export default class ErrorBoundary extends PureComponent {

    state = {
        error: null,
        errorInfo: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {
        const { children } = this.props;
        const { error, errorInfo } = this.state;

        return (
            errorInfo ?
                <div className={blockName}>
                    <h2 className={`${blockName}__title`}>Something went wrong</h2>
                    <details
                        className={`${blockName}__details`}
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                        {error && error.toString()}
                        <br />
                        {errorInfo.componentStack}
                    </details>
                </div> :
                children
        );
    }
}
