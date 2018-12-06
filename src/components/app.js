import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import movies from '../movieData.js';
import MovieList from './movieList.js';
import SearchBar from './searchBar.js';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies 
    };
  }

  handleSearchButtonClick(event) {
    event.preventDefault();
    var searchWords = new Set($('input').val().toLowerCase().split(' '));
    // console.log(searchValues);
    var filteredMovies = [];

    for (var i = 0; i < movies.length; i++) {
      var movieWords = new Set(movies[i].title.toLowerCase().split(' '));
      var matchingWords = new Set([...searchWords].filter(word => movieWords.has(word)));
      if (matchingWords.size > 0) {
        filteredMovies.push(movies[i]);
      }
    }

    if (filteredMovies.length === 0) {
      this.setState({
        warning: 'no movie by that name found'
      });
    }

    this.setState({
      movies: filteredMovies
    });
    
  }

  render() {

    const titleStyle = {
      border: '1px solid gray',
      paddingLeft: '1em'
    };

    const divStyle = {
      border: '1px solid gray',
      padding: '1em',
      width: '30vw'
    };

    return (
      <div style={divStyle}>
        <h1 style={titleStyle}>Movie List</h1>
        <SearchBar searchFunction={this.handleSearchButtonClick.bind(this)} />
        {this.state.warning ? <h2>{this.state.warning}</h2> : null}
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

// App.propTypes = {
//   movies: PropTypes.array.isRequired
// };

export default App;