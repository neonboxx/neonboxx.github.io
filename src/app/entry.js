import React from 'react';
import {App} from './app.jsx';
import {render} from 'react-dom';
require('./index.html');
module.hot.accept();
render(<App/>, document.getElementById('app'));
