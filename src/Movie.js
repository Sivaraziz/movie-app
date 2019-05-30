import React from 'react'
import Youtube from './Youtube.js';
import $ from 'jquery';
import StarRatingComponent from 'react-star-rating-component';

class Movie extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    state = {
      youtube: null,
      rating: this.props.rating
    };

    callApi = () => {
        if (!this.state.toggleTrailer) {
          const data = <Youtube key={this.id} title={this.props.movie.title} movie={this.props.movie} callApi={this.callApi} />

          this.setState({ youtube: data, toggleTrailer: true });
        } else {
          this.setState({ youtube: null, toggleTrailer: false });
        }
    }

    onStarClick(nextValue, prevValue, name) {
      var currentRatings = JSON.parse(localStorage.getItem("ratings"));
      currentRatings[name] = nextValue;
      
      localStorage.setItem("ratings", JSON.stringify(currentRatings));
      this.setState({rating: currentRatings[name]});
      console.log(this.state.rating);
    }

    render() {
      const { rating } = this.state;
      var rateName = "movie_rate_" + this.props.movie.id;

      return (
        <div>
        <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <div class="pic_box">
                <img id="pic" alt="poster" width="120" src={this.props.movie.poster_src}/>
              </div>
            </td>
            <td>
              <h4>{this.props.movie.title}</h4>
              <p> {this.props.movie.overview} </p>
              <input id="view" type="button" style={{backgroundColor: 'green'}} onClick={this.viewMovie.bind(this)} value="View"/>
              <input id="trailer" type="button" style={{backgroundColor: 'grey'}} onClick={this.callApi} value="Trailer"/>
              <StarRatingComponent 
                name={rateName}
                starCount={5}
                value={rating}
                onStarClick={this.onStarClick.bind(this)}
              />
            </td>
          </tr>
         </tbody>
        </table>
        {this.state.youtube}
        </div>
    );
    }
}

export default Movie
