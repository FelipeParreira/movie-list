import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import extraData from '../movieData.js';
import _ from 'underscore';

var MovieDetails = (props) => {
  const spanStyle = {
    fontWeight: 'bold'
  };

  const imgStyle = {
    width: '10',
    heigth: '10'
  };

  const buttonStyle = {
    backgroundColor: props.movie.watched ? 'green' : 'white',
    color: props.movie.watched ? 'white' : 'green'
  };

  return (
    <div className="container">
      <ul>
        {_.map(extraData, (data, key) => {
          return (
            <li key={data+key}><span style={spanStyle}>{key}</span>: {data}</li>
          );
        })}
        <li>
          <button style={buttonStyle} onClick={() => props.toggleMovie(props.movie)}>
            Watched
          </button>
        </li>
      </ul>
      <img style={imgStyle} src="" />
    </div>
  );  
};

export default MovieDetails;