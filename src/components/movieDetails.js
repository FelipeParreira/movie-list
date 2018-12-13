import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import $ from 'jquery';
import extraData from '../movieData.js';
import _ from 'underscore';

var MovieDetails = (props) => {
  const spanStyle = {
    fontWeight: 'bold'
  };

  const imgStyle = {
    width: 'auto',
    heigth: '50'
  };

  const buttonStyle = {
    backgroundColor: props.movie.watched ? 'green' : 'white',
    color: props.movie.watched ? 'white' : 'green'
  };

  return (
    <div className="container">
      <ul>
        {_.map(props.movie.details, (data, key) => {
          return (
            <li key={data + key}><span style={spanStyle}>{key}</span>: {data}</li>
          );
        })}
        <li>
          <button style={buttonStyle} onClick={() => props.toggleMovie(props.movie)}>
            Watched
          </button>
        </li>
      </ul>
      <img style={imgStyle} src={`https://image.tmdb.org/t/p/w200/${props.movie.details.poster_path}`} />
    </div>
  );  
};

export default MovieDetails;