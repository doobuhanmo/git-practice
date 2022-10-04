import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';
import Youtube from './services/youtube';

const youtube = new Youtube('AIzaSyDGBrIvbWKSu6Okhp_hN-ORO0cFgd_SvZo');
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById('root')
);

