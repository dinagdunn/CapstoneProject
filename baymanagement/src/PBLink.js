import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class PBLink extends Component {

	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
 }

	clickHandler(event) {
		//push new data to db !!!
		event.preventDefault();
		const pId = event.target[0].value
		this.props.push.history('/search/`${pId}')
	}
	
	render() {
		return (
			<div>
				<h1>This is where you link a bay and a pallet. It's like a marriage.</h1>
			</div>
			)
	}
}

export default PBLink