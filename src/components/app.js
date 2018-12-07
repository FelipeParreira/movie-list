import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import movies from '../movieData.js';
import MovieList from './movieList.js';
import SearchBar from './searchBar.js';
import AddMovieBar from './addMovieBar.js';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies,
      warning: 'no movie by that name found'
    };
  }

  handleSearchButtonClick(event) {
    console.log('Search function');
    event.preventDefault();
    var searchWords = new Set($('input.search').val().toLowerCase().split(' '));
    var filteredMovies = [];

    // TODO: make this searching function better
    for (var i = 0; i < movies.length; i++) {
      var movieWords = new Set(movies[i].title.toLowerCase().split(' '));
      var matchingWords = new Set([...searchWords].filter(word => movieWords.has(word)));
      if (matchingWords.size > 0) {
        filteredMovies.push(movies[i]);
      }
    }
    console.log('filteredMovies: ', filteredMovies);
    this.setState({
      movies: filteredMovies
    });
    
  }

  handleAddButtonClick() {

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

    const buttonsDivStyle = {
      margin: '0 auto',
      width: '12vw'
    };

    return (
      <div style={divStyle}>
        <h1 style={titleStyle}>Movie List</h1>
        <div style={buttonsDivStyle}>
          <AddMovieBar addFunction={this.handleAddButtonClick.bind(this)} />
          <SearchBar searchFunction={this.handleSearchButtonClick.bind(this)} />
        </div>
        {this.state.movies.length === 0 ? <h2>{this.state.warning}</h2> : null}
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

// App.propTypes = {
//   movies: PropTypes.array.isRequired
// };

export default App;