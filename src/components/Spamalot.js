import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    render(){
        const spamArr = []
        for(let i=0; i<500; i++){
            spamArr.push(<Spam />)
        }
        return (<div>{spamArr}</div>)
    }
}

export default Spamalot

