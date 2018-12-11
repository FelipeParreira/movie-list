import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MovieDetails from './movieDetails.js';

var MovieListEntry = (props) => {

  const itemStyle = {
    border: '1px solid gray',
    padding: '2em'
  };

  const buttonStyle = {
    backgroundColor: props.movie.watched ? 'green' : 'white',
    color: props.movie.watched ? 'white' : 'green'
  };

  return (
    <li style={itemStyle}>
      <span onClick={() => props.handleTitleClick(props.movie)}>{props.movie.title}</span>
      <button style={buttonStyle} onClick={() => props.toggleMovie(props.movie)}>
        Watched
      </button>
      {props.movie.showDetails ? <MovieDetails /> : null}
    </li>
  );
};

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired,
  handleTitleClick: PropTypes.func.isRequired
};

export default MovieListEntry;