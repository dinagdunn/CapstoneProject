import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'

class AddPallet extends Component {
    
    constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
 }

	clickHandler(event) {
        event.preventDefault();
        //push to spring
        // const query = event.target[0].value
        const query = 'p101'
		this.props.history.push(`/load/${query}`)
}

	render() {
		return (
            <BrowserRouter>
            <form onSubmit={this.clickHandler}>
            <AddCommon />
				{/* <input type="text" /> */}
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
            </BrowserRouter>
        )
    }
}

export default AddPallet