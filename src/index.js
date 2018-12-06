import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.js';
import movies from './movieData.js';

ReactDOM.render(
  <App movies={movies} />,
  document.getElementById('app')
);


