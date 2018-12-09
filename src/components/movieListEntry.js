import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

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
      {props.movie.title} 
      <button style={buttonStyle} onClick={() => props.toggleMovie(props.movie)}>
        Watched
      </button>
    </li>
  );
};

MovieListEntry.propTypes = {
  movie: PropTypes.object.isRequired
};

export default MovieListEntry;