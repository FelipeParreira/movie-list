import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var SearchBar = (props) => {

  return (
    <div>
      <input className="search" type="text" placeholder="Search..." /> <button onClick={props.searchFunction}>Go!</button>
    </div> 
  );
};

SearchBar.propTypes = {
  searchFunction: PropTypes.func.isRequired
};

export default SearchBar;
