import React, { Component, App } from 'react';
import './App.css';
import $ from 'jquery'
import axios from 'axios'
import _ from 'lodash'
import Movie from './Movie.js'

export class Youtube extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedVideo: [],
            embed_id: "",
            youtube_api_key: "AIzaSyAbxyx3I8ofQyzhLMZDYF6oSCLOEtBBVM0"
        };
    };

    componentDidMount() {
        console.log(this.props);
        const urlString = "https://www.googleapis.com/youtube/v3/search";
        var self = this;

        var postData = {
            params: {
                key: this.state.youtube_api_key,
                q: this.props.movie.title + " movie - trailer",
                part: 'snippet',
                order: 'relevance',
                maxResults: 1
            }
        };

        axios.get(urlString, postData).then(function(data) {
            var data = data.data;
            var selectedVideo = data.items[0];
            var embed_id = selectedVideo.id.videoId;
            
            self.setState({ embed_id });
        })
        .catch(function (error) {
           console.log(error);
        });
    };

    render() {
        const title = this.props.title;


        console.log(this.state);

        return(
            <div className="youtube">
                <h2>{title} - Trailer</h2>
                <iframe className="embed_video" width="100%" height="315" src={"https://www.youtube.com/embed/" + this.state.embed_id} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        );
    }
}

export default Youtube
