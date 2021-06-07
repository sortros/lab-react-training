import React, { Component } from 'react'

export default class IdCard extends Component {
    render() {
        return (
            <div>
                <div>
                    <img src={this.props.picture} />
                </div>
                <div>
                    <p>First name: {this.props.firstName}</p>
                    <p>Last name:{this.props.lastName}</p>
                    <p>Gender:</p>
                    <p>Height:</p>
                    <p>Birth:{this.props.birth}</p>
                </div>
            </div>
        )
    }
}
