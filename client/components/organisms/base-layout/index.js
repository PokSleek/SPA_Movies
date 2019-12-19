import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from 'organisms/main';
import { store } from 'store/store';

import './base-layout.scss';

const blockName = 'base-layout';

export default class BaseLayout extends PureComponent {

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route
                            path={['/search', '/film/:id']}
                            render={
                                (props) =>
                                    <div className={blockName}>
                                        <Main {...props}/>
                                    </div>
                            }
                        />
                        <Route path={'*'}>
                            404
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        );
    }
}
