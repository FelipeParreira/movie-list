import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MovieListEntry from './movieListEntry.js';

var MovieList = (props) => {

  const listStyle = {
    listStyleType: 'none'
  };

  return (
    <ul style={listStyle}>
      {props.movies.map(movie => (<MovieListEntry handleTitleClick={props.handleTitleClick} movie={movie} key={movie.title} toggleMovie={props.toggleMovie} />))}
    </ul>  
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired
};

export default MovieList;
