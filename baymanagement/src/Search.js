import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import LoadPallet from './LoadPallet.js'
import LoadBay from './LoadBay.js'

class Search extends Component {
	
	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
 }

	clickHandler(event) {
		event.preventDefault();
		const query = event.target[0].value
		this.props.history.push(`/search/${query}`)
}

	render() {
		return (
			<form onSubmit={this.clickHandler} className="bar">
				<input type="text" />
				<button className="btn btn-primary" type="submit">Search</button>
			</form>


			)
	}
}

export default Search