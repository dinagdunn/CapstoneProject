import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class EditPallet extends Component {

	constructor() {
		super();
		this.submitHandler = this.submitHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
	}

	submitHandler(event) {
		//push new data to db !!!
		console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
		event.preventDefault();
		// const pId = event.target[0].value
		const pId = 'p66'
		this.props.history.push(`/load/${pId}`)
	}

	deleteHandler(event) {
		//push new data to db !!!
		event.preventDefault();
		const pId = this.props.match.params[0];
		console.log(pId)
		this.props.history.push('/?msg=deleted')
	}

	render() {
		return (
			<BrowserRouter>
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

					<button className="btn btn-primary"  onClick={this.submitHandler}>Submit</button>
					<button className="btn btn-primary"  onClick={this.deleteHandler}>Delete</button>

				</div>
			</BrowserRouter>
		)
	}
}

export default EditPallet