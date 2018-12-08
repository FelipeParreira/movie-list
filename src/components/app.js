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
      movies: [],
      displayedMovies: [],
      warning: 'no movie by that name found',
      searchClicked: false
    };
  }

  handleSearchButtonClick(event) {
    console.log('Search function');
    event.preventDefault();
    var searchWords = new Set($('input.search').val().toLowerCase().split(' '));
    var filteredMovies = [];

    // TODO: make this searching function better
    var movies = this.state.movies;
    for (var i = 0; i < movies.length; i++) {
      var movieWords = new Set(movies[i].toLowerCase().split(' '));
      var matchingWords = new Set([...searchWords].filter(word => movieWords.has(word)));
      if (matchingWords.size > 0) {
        filteredMovies.push(movies[i]);
      }
    }
    
    this.setState({
      displayedMovies: filteredMovies,
      searchClicked: true
    });   
  }

  handleAddButtonClick() {
    var newMovie = $('input.add').val();
    $('input.add').val('');
    this.setState({
      movies: this.state.movies.concat(newMovie),
      searchClicked: false
    });
    window.alert('A new movie ' + '("' + newMovie + '")' + ' was added to the list!');
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
        {this.state.searchClicked && this.state.displayedMovies.length === 0 ? <h2>{this.state.warning}</h2> : null}
        <MovieList movies={this.state.displayedMovies} />
      </div>
    );
  }
}

export default App;