import React, { Component } from 'react'

export default class Random extends Component {
    getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      }
    render() {
        
        return (
            <div>
                <p>Random value between {this.props.min} and {this.props.max} => {this.getRandomIntInclusive(this.props.min, this.props.max)}</p>
            </div>
        )
    }
}
