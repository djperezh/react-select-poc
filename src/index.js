import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from './header';
import VersionOne from './reactselectv1';
import VersionLatest from './reactselectlatest';

ReactDOM.render(<Header />, document.getElementById('header'));

ReactDOM.render(<VersionOne />, document.getElementById('versionone'));

ReactDOM.render(<VersionLatest />, document.getElementById('versionlatest'));

serviceWorker.unregister();
