import React, { Component } from 'react'

export class IdCard extends Component {
    render() {
        return (
            <div>
            <p>First name: {this.props.firstName}</p> 
            <p>Last name: {this.props.lastName}</p>
            <p>Gender: {this.props.gender}</p>
            <p>Height: {this.props.height} cm</p>
            <p>Birth: {this.props.birth.toDateString()}</p>
            <img src={this.props.picture}/> 
            </div>
            
        )
    }
}

export default IdCard
