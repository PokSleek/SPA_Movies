import React, { PureComponent } from 'react';

import Header from 'organisms/header';
import Footer from 'organisms/footer';
import MainContent from 'organisms/main-content';

export default class BaseLayout extends PureComponent {

    render() {
        return <div className={'base-layout'}>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    }
}
