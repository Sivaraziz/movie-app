import React, { Component } from 'react';
import './App.css';
import $ from 'jquery'
import Movie from './Movie.js'


export class Youtube extends React.Component {

    render() {
        const API ='AIzaSyDHsTV3Glhqj4q9e3_Yqr2r62tCuIrd1WU'
        const result = 1;
        const title = this.title
        console.log(title);
        var finalUrl = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDHsTV3Glhqj4q9e3_Yqr2r62tCuIrd1WU&UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10"
        return(
              <div className="youtube">
              <h1>Hello</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/83apjSbVV-o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

              </div>

        );
    }
}

export default Youtube
