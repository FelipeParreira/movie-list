import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import extraData from '../movieData.js';
import MovieList from './movieList.js';
import SearchBar from './searchBar.js';
import AddMovieBar from './addMovieBar.js';
import API_key from '../../config/API_key.js';
import $ from 'jquery';
import _ from 'underscore';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
      displayedMovies: [],
      searchClicked: false,
      watched: false,
      nonWatched: false
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
        searchClicked: true,
        watched: false,
        nonWatched: false
      });  
    } 
  }

  handleAddButtonClick() {
    var title = $('input.add').val();
    $('input.add').val('');

    if (title !== '') {

      var newMovie = {watched: false, showDetails: false};

      $.ajax({
        type: 'POST',
        url: 'http://127.0.0.1:3000/api/movies',
        data: {title: title},
        success: (data) => {
          console.log('DATA from API:', data);
          var title  = data.results[0].original_title;
          if (!this.state.movies[title]) {
            var movieObject = {};
            movieObject[title] = newMovie;
            newMovie.title = title;
            newMovie.details = data.results[0];
            this.setState({
              movies: Object.assign(this.state.movies, movieObject),
              searchClicked: false
            });
            
            window.alert('A new movie ' + '("' + title + '")' + ' was added to the list!');        
          } else {
            window.alert('This movie ' + '("' + title + '")' + ' is already in the list!');        
          }
        },
        error: console.log
      });
    }

    console.log(this.state.movies);
  }

  toggleMovie(movie) {
    var watched = !movie.watched;
    var movieObject = {};
    movie.watched = !movie.watched;

    movieObject[movie.title] = Object.assign({}, movie);
    movieObject[movie.title].watched = watched;

    this.setState({
      movies: Object.assign(this.state.movies, movieObject)
    });
  }

  handleWatchedClick(watched) {
    console.log('this.state.movies', this.state.movies);
    var filteredMovies = _.filter({...this.state.movies}, movie => {
      return watched ? movie.watched : !movie.watched;
    });

    this.setState({
      displayedMovies: filteredMovies,
      watched,
      nonWatched: !watched,
      searchClicked: false 
    });
  }

  handleTitleClick(movie) {
    console.log('handle title click');
    var newMovie = Object.assign(this.state.movies[movie.title]);
    newMovie['showDetails'] = !movie.showDetails;
    // movie.showDetails = !movie.showDetails;
    var newMovies = {...this.state.movies};
    newMovies[movie.title] = newMovie;

    this.setState({
      movies: newMovies
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
      width: '50vw',
      margin: '0 auto'
    };

    const buttonsDivStyle = {
      margin: '0 auto',
      width: '12vw'
    };

    const watchedButtonStyle = {
      backgroundColor: this.state.watched ? 'green' : 'white',
      color: this.state.watched ? 'white' : 'green'
    };

    const nonWatchedButtonStyle = {
      backgroundColor: this.state.nonWatched ? 'green' : 'white',
      color: this.state.nonWatched ? 'white' : 'green'
    };

    console.log('displayed movies', this.state.displayedMovies);

    return (
      <div style={divStyle}>
        <h1 style={titleStyle}>Movie List</h1>
        <div style={buttonsDivStyle}>
          <AddMovieBar addFunction={this.handleAddButtonClick.bind(this)} />
          <SearchBar searchFunction={this.handleSearchButtonClick.bind(this)} />
          <br />
          <button style={watchedButtonStyle} onClick={this.handleWatchedClick.bind(this, true)}>Watched</button>
          <button style={nonWatchedButtonStyle} onClick={this.handleWatchedClick.bind(this, false)}>To Watch</button>
        </div>
        <h2>
          {
            (this.state.searchClicked && this.state.displayedMovies.length === 0) ?
            "no movie by that name found" :
            (this.state.watched && this.state.displayedMovies.length === 0) ?
            "No movies were watched" :
            (this.state.nonWatched && this.state.displayedMovies.length === 0) ?
            "No movies to be watched" :
            null
          }
        </h2>
        <MovieList handleTitleClick={this.handleTitleClick.bind(this)} movies={this.state.displayedMovies} toggleMovie={this.toggleMovie.bind(this)} />
      </div>
    );
  }
}

export default App;