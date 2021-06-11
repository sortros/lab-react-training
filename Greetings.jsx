import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
        if(this.props.lang === "de"){
            return(
                <p>Hallo {this.props.children}</p>
            )
        } else if(this.props.lang === "en"){
            return(
                <p>Hello {this.props.children}</p>
            )
        } else if(this.props.lang === "es"){
            return(
                <p>Hola {this.props.children}</p>
            )
        } else if(this.props.lang === "fr"){
            return(
                <p>Bonjour {this.props.children}</p>
            )
        } 
    }
}
