import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js'
import $ from 'jquery'
import Youtube from './Youtube.js';
//test
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}

    if (localStorage.getItem("ratings")) {
        console.log("HAS LOCAL STORAGE");
    } else {
        console.log("DOES NOT HAVE LOCAL STORAGE");
        localStorage.setItem("ratings", JSON.stringify({}));
    }
    console.log("this is")

    // const movies = [
    //     {id: 0, title: "Avengers Infinity War", overview: "hellloooo"},
    //     {id: 1, title: "Avengers", overview: "HEloozz"},
    // ]
    //
    // this.state = {rows: <p>This is my row</p>}
    //
    // var movieRows = []
    // movies.forEach((movie) => {
    //     console.log(movie.title)
    //
    //     const movieRow = <Movie movie={movie}/>
    //     movieRows.push(movieRow)
    // })
    //
    // this.state = {rows: movieRows}

    this.performSearch();
  }
  performSearch(searchTerm) {
      const urlString = "https://api.themoviedb.org/3/search/movie?&api_key=9fecf79019c1e5aaa1776266fb8e4fcd&query=" + searchTerm
      $.ajax({
          url: urlString,
          success: (searchResults) => {
              console.log("fetch data")
              console.log(searchResults);
              const results = searchResults.results
              console.log(results[0]);

              var movieRows = []

              results.forEach((movie) => {
                  console.log(movie.poster_path);
                  var rating = JSON.parse(localStorage.getItem("ratings"));
                  rating = rating["movie_rate_" + movie.id];

                  movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path
                  const movieRow = <Movie key={movie.id} movie={movie} rating={rating}/>
                  movieRows.push(movieRow)
              })

              this.setState({rows: movieRows})
          },
          error: (xhr, status, err) => {
              console.error("Failed");
          }

      })

  }

  searchChangeHandler(event) {
      console.log(event.target.value);
      const boundObject = this
      const searchTerm = event.target.value
      this.performSearch(searchTerm)
  }

  render() {
      return (
        <div>
           <h1>Movies</h1>

           <input className="search_bar" onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search..."/>

           {this.state.rows}

        </div>
  );
}
}

export default App;
