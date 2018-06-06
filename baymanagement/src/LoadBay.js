import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class LoadBay extends Component {

	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
 }

	clickHandler(event) {
		event.preventDefault();
			// const query = event.target[0].value
			const query = ' b100'
			this.props.history.push(`/edit/${query}`)
}


	render() {
		return (
			<div>
			<h1>Bay goes here</h1>
			<p>Bay ID: </p>
			<p>Bay Name: </p>
			<p>Bay dimensions: </p>
			<p>Width:  </p>
			<p>Height: </p>
			<p>Length:  </p>
			<p>Department: </p>
			<p>Class: </p>
			<p>Category: </p>
			<form onSubmit={this.clickHandler} className="bar">
				<button className="btn btn-primary" type="submit">Edit</button>
			</form>
			</div>
			)
	}
}

export default LoadBay