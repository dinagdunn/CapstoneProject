import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'

class ManageSubs extends Component {
    
    constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
 }

	clickHandler(event) {
        event.preventDefault();
        //push to spring
        // const query = event.target[0].value
        const query = 'b101'
		this.props.history.push(`/load/${query}`)
}

	render() {
		return (
            <div>
            <h1>Sub page</h1>
            <form className="col-6" onSubmit={this.clickHandler}>
            <AddCommon />
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
            </div>
        )
    }
}

export default ManageSubs