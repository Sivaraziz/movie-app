import React, { Component, App } from 'react';
import './App.css';
import $ from 'jquery'

export class Stars extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        var stars = this.props.stars;
        return(
            <div className="stars">
                {stars} Star Here.
            </div>
        );
    }
}

export default Stars
