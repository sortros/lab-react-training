import React, { Component } from 'react'

export default class IdCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.picture} alt=""/>
                </div>
                <div>
                    <p>First name:  {this.props.firstName}</p>
                    <p>Last name: {this.props.lastName}</p>
                    <p>Gender: {this.props.gender}</p>
                    <p>Height: {this.props.height}cm</p>
                    <p>Birth: {"this.props.birth"}</p>
                    <p lang={this.props.lang}>Greeting: {this.props.Greetings}</p>
                    <p></p>
                </div>
            </div>
        )
    }
}
