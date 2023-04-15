import React from "react";
import { Component } from "react";
import "./places.css"

class Place extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="place container-md">
                <span name="name">First place</span>
                <span name='time'>70 min</span>
                <div className="btn-container">
                    <button className="btn btn-primary"><i class="fa-solid fa-check"></i></button>
                    <button className="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
                </div>
                
            </div>
        )
    }
}

export default Place;