import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var AddMovieBar = (props) => {

  return (
    <div>
      <input type="text" placeholder="Add movie title here" /> <button onClick={props.addFunction}>Add</button>
    </div> 
  );
};

AddMovieBar.propTypes = {
  addFunction: PropTypes.func.isRequired
};

export default AddMovieBar;
