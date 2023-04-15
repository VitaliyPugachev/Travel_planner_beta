import React from "react";
import { Component } from "react";
import Place from "../places/places";
import "./container.css"

class Container extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return (
            <main>
                <Place/>
                <Place/>
                <Place/>
                <Place/>
            </main>
        )
    }
}

export default Container;