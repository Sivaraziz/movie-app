import React from 'react'
import Youtube from './Youtube.js';

class Movie extends React.Component {
    viewMovie() {
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }

    state = {
        data: null,
    };

    callApi = () => {
        const data = <Youtube key={this.id} title={this.props.movie.title} callApi={this.callApi} />

        this.setState({ data });
    }
    


    render() {
        return (
        <div>
        <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img id="pic" alt="poster" width="120" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h4>{this.props.movie.title}</h4>
              <p> {this.props.movie.overview} </p>
              <input id="view" type="button" style={{backgroundColor: 'green'}} onClick={this.viewMovie.bind(this)} value="View"/>
              <input id="trailer" type="button" style={{backgroundColor: 'grey'}} onClick={this.callApi} value="Trailer"/>
            </td>
          </tr>
         </tbody>
        </table>
        {this.state.data}
        </div>
    );
    }
}

export default Movie
