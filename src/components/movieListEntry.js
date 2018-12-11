import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MovieDetails from './movieDetails.js';
import $ from 'jquery';

var MovieListEntry = (props) => {

  const itemStyle = {
    border: '1px solid gray',
    padding: '2em'
  };

  return (
    <li style={itemStyle}>
      <button onClick={(event) => {
        $(event.target).siblings('.movie-details').toggle();
        props.handleTitleClick(props.movie);
      }
      }>{props.movie.title}</button>
      {props.movie.showDetails ? 
        (<div className="movie-details">
          <MovieDetails movie={props.movie} toggleMovie={props.toggleMovie} /> 
        </div>)
        : null}
    </li>
  );
};

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired,
  handleTitleClick: PropTypes.func.isRequired
};

export default MovieListEntry;