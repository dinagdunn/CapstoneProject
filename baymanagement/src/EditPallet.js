import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class EditPallet extends Component {

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
			<label>
			Name: 
			<input type="text" name="name" value="" />
			</label>
			<br />
			
			<label>
			Height: 
			<input type="text" name="height" value="" />
			</label>
			<br />

			<label>
			Width: 
			<input type="text" name="width" value="" />
			</label>
			<br />

			<label>
			Depth: 
			<input type="text" name="depth" value="" />
			</label>
			<br />

			<label>
			Department: 
			<select name="department" value="" >
			<option value="D1">D1</option>
			</select>
			</label>
			<br />

			<label>
			Class: 
			<select name="class" value="" >
			<option value="Cl1">Cl1</option>
			</select>
			</label>
			<br />

			<label>
			Category: 
			<select name="category" value="" >
			<option value="Ca1">Ca1</option>
			</select>
			</label>
			<br />

			<form onSubmit={this.clickHandler} className="bar">
				<button className="btn btn-primary" type="submit">Submit</button>
				<button className="btn btn-primary" type="submit">Delete</button>
			</form>

			</div>
			)
	}
}

export default EditPallet