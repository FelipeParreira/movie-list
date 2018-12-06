import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

var SearchBar = (props) => {

  const listStyle = {
    listStyleType: 'none'
  };

  return (
    <div>
      <input type="text" /> <button>Go!</button>
    </div> 
  );
};

SearchBar.propTypes = {

};

export default SearchBar;
