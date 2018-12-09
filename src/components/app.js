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
      movies: {},
      displayedMovies: [],
      warning: 'no movie by that name found',
      searchClicked: false
    };
  }

  handleSearchButtonClick(event) {
    if ($('input.search').val() !== '') {

      event.preventDefault();
      var searchWords = new Set($('input.search').val().toLowerCase().split(' '));
      var filteredMovies = [];

      // TODO: make this searching function better
      var movies = this.state.movies;
      console.log('movies', movies);
      for (var movie in movies) {
        console.log('movie', typeof movie);
        var movieWords = new Set((movie).toLowerCase().split(' '));
        var matchingWords = new Set([...searchWords].filter(word => movieWords.has(word)));
        if (matchingWords.size > 0) {
          filteredMovies.push(movies[movie]);
        }
      }
      
      this.setState({
        displayedMovies: filteredMovies,
        searchClicked: true
      });  
    } 
  }

  handleAddButtonClick() {
    var title = $('input.add').val();
    if (title !== '') {
      var newMovie = {};
      newMovie.title = title;
      $('input.add').val('');
      if (!this.state.movies[title]) {
        var movieObject = {};
        movieObject[title] = newMovie;
        this.setState({
          movies: Object.assign(this.state.movies, movieObject),
          searchClicked: false
        });
        window.alert('A new movie ' + '("' + newMovie.title + '")' + ' was added to the list!');        
      } else {
        window.alert('This movie ' + '("' + newMovie.title + '")' + ' is already in the list!');        
      }
    }
    console.log(this.state.movies);
  }

  toggleMovie(movie) {
    
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

    console.log('displayed movies', this.state.displayedMovies);

    return (
      <div style={divStyle}>
        <h1 style={titleStyle}>Movie List</h1>
        <div style={buttonsDivStyle}>
          <AddMovieBar addFunction={this.handleAddButtonClick.bind(this)} />
          <SearchBar searchFunction={this.handleSearchButtonClick.bind(this)} />
          <br />
          <button>Watched</button>
          <button>To Watch</button>
        </div>
        {this.state.searchClicked && this.state.displayedMovies.length === 0 ? <h2>{this.state.warning}</h2> : null}
        <MovieList movies={this.state.displayedMovies} />
      </div>
    );
  }
}

export default App;