import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import GlobalStyle from './styles/global';

ReactDom.render(
    <>
        <App />,
        <GlobalStyle/>
    </>,
    document.getElementById('root'),
);