import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MovieList from './movieList.js';

var App = (props) => {

  const titleStyle = {
    border: '1px solid gray',
    paddingLeft: '1em'
  };

  const divStyle = {
    border: '1px solid gray',
    padding: '1em',
    width: '30vw'
  };

  return (
    <div style={divStyle}>
      <h1 style={titleStyle}>Movie List</h1>
      <MovieList movies={props.movies} />
    </div>
  );
};

App.propTypes = {
  movies: PropTypes.array.isRequired
};

export default App;