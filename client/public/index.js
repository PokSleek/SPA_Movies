import React from 'react';
import ReactDOM from 'react-dom';

import BaseLayout from 'organisms/base-layout';

import './layouts/reset.css';
import './layouts/style.css';

ReactDOM.render(
    <BaseLayout/>,
    document.querySelector('#root')
);
