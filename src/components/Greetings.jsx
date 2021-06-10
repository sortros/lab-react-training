import React, { Component } from 'react'


export default class Greetings extends Component {
    render() {
        return (
            <div>
                <p>lang:  {this.props.lang}</p>
                <div>
                    <p>GreetingMessage: {this.props.message}</p>
                </div>
            </div>
        )
    }
}