import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var MovieListEntry = (props) => {

  const itemStyle = {
    border: '1px solid gray',
    padding: '2em'
  };

  return (
    <li style={itemStyle}>{props.movie}</li>
  );
};

MovieListEntry.propTypes = {
  movie: PropTypes.string.isRequired
};

export default MovieListEntry;