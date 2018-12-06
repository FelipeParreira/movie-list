import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var SearchBar = (props) => {

  const listStyle = {
    listStyleType: 'none'
  };

  return (
    <div>
      <input type="text" /> <button onClick={props.searchFunction}>Go!</button>
    </div> 
  );
};

SearchBar.propTypes = {
  searchFunction: PropTypes.func.isRequired
};

export default SearchBar;
