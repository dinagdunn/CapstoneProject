import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class EditBay extends Component {

	constructor() {
		super();
		this.submitHandler = this.submitHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
		this.subHandler = this.subHandler.bind(this)

		this.state = {
			masterBayInfo: {
				// id: 0,
				// width: 0,
				// height: 0,
				// length: 0,
				// dep: "",
				// paletteClass: "",
				// category: "",
				// bay: 0

				bayList: [{}]
			}
		}
	}

	submitHandler(event) {
		//push new data to db !!!
		event.preventDefault();
		// const pId = event.target[0].value
		const bId = 'b123'
		this.props.history.push(`/load/${bId}`)
	}

	deleteHandler(event) {
		//delete from the db
		event.preventDefault();
		this.props.history.push('/')
	}

	subHandler(event) {
		// add to db
		event.preventDefault();
		this.props.history.push('/managesubs/')
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

					<form className="bar">
						<div className="row">
							<button className="btn btn-primary" 
							type="submit" onClick={this.submitHandler}>
							Submit</button>
							<button className="btn btn-primary" 
							type="submit" onClick={this.deleteHandler}>
							Delete</button>
						</div>
						<div className="row">
							<button className="btn btn-primary" 
							type="submit" onClick={this.subHandler}>
							Manage Sub Bays</button>
						</div>
					</form>

				</div>
			</BrowserRouter>
		)
	}
}

export default EditBay