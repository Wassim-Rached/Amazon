import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GloblaStyles from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <GloblaStyles/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
