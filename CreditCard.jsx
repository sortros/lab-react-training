import React, { Component } from 'react'

export default class CreditCard extends Component {

    

    render() {
        let img= "";
        if (this.props.type === "Visa") {
            img ="./img/visa.png" 
         } else{
            img ="./img/master-card.svg"
         }


        let expirationMonth = '';

         if(this.props.expirationMonth.toString().length === 1){
            expirationMonth = '0' + this.props.expirationMonth
         } else{
            expirationMonth = this.props.expirationMonth.toString();
         }

        return (
            <div>
                <img src={img} alt="credit card name"/>
                <p>{this.props.number}</p>
                <p>{expirationMonth}/{this.props.expirationYear.toString().slice(-2)}</p>
                <p>{this.props.bank}</p>
                <p>{this.props.owner}</p>
                <p>{this.props.bgColor}</p>
                <p>{this.props.color}</p>
            </div>
        )
    }
}
