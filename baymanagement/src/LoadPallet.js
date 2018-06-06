import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class LoadPallet extends Component {

	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
 }

	clickHandler(event) {
		event.preventDefault();
			// const query = event.target[0].value
			const query = 'p100'
			this.props.history.push(`/edit/${query}`)
}

clickHandler(event) {
	event.preventDefault();
		// const query = event.target[0].value
		const query = 'p100'
		this.props.history.push(`/pblink/${query}`)
}

	render() {
		return (
			<div>
			<h1>Pallet goes here</h1>
			<p>Palette ID: </p>
			<p>Palette Name: </p>
			<p>Palette dimensions: </p>
			<p>Width:  </p>
			<p>Height: </p>
			<p>Length:  </p>
			<p>Department: </p>
			<p>Class: </p>
			<p>Category: </p>
			<form onSubmit={this.clickHandler} className="bar">
				<button className="btn btn-primary" type="submit">Edit</button>
			</form>
			<form onSubmit={this.linkHandler} className="bar">
				<button className="btn btn-primary" type="submit">Link</button>
			</form>
			</div>
			)
	}
}

export default LoadPallet