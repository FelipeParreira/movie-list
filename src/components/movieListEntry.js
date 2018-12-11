import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MovieDetails from './movieDetails.js';

var MovieListEntry = (props) => {

  const itemStyle = {
    border: '1px solid gray',
    padding: '2em'
  };

  return (
    <li style={itemStyle}>
      <button onClick={() => props.handleTitleClick(props.movie)}>{props.movie.title}</button>
      {props.movie.showDetails ? <MovieDetails movie={props.movie} toggleMovie={props.toggleMovie} /> : null}
    </li>
  );
};

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired,
  handleTitleClick: PropTypes.func.isRequired
};

export default MovieListEntry;