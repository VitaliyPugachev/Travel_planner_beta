import './add-panel.css'
import React from 'react'
import { Component } from 'react'

class AddPanel extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className='container-md add-panel'>
                <input type="text" 
                placeholder='Place you want to visit'
                className='form-control'/>
                <input type="text" 
                placeholder='Time for visit'
                className='form-control'/>
                <button className='btn btn-primary'>ADD</button>
            </div>
        )
    }
}

export default AddPanel;