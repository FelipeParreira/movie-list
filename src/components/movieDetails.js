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

  return (
    <div className="container">
      <ul>
        {_.map(extraData, (data, key) => {
          return (
            <li key={data+key}><span style={spanStyle}>{key}</span>: {data}</li>
          );
        })}
      </ul>
      <img style={imgStyle} src="" />
    </div>
  );  
};

export default MovieDetails;