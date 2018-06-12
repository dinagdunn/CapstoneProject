import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'

class EditBay extends Component {

	constructor() {
		super();

		this.submitHandler = this.submitHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
    this.subHandler = this.subHandler.bind(this)

		this.handleChangeWidth = this.handleChangeWidth.bind(this)
		this.handleChangeLength = this.handleChangeLength.bind(this)
		this.handleChangeHeight = this.handleChangeHeight.bind(this)

		this.state = {
			masterBayInfo: {
				id: 0,
				width: 0,
				height: 0,
				length: 0,


			}
		}
	}


	componentDidMount() {
		let bId = this.props.match.params.id;
		bId = parseInt(bId)

		axios.get(`http://localhost:8080/getMasterbayById?id=${bId}`)
			.then(res => {
				console.log(res.data);
				this.setState({
					masterBayInfo: res.data,
					id: bId
				});
			})
	}

	// handleChange = () => (event) => {
	// 	this.setState({
	// 		id: event.target.value,
	// 		width: event.target.value,
	// 		height: event.target.value,
	// 		length: event.target.value
	// 	});
	// }

	handleChangeWidth = () => (event) => {
		this.setState({width: event.target.value})
	}

	handleChangeHeight = () => (event) => {
		this.setState({height: event.target.value})
	}

	handleChangeLength = () => (event) => {
		this.setState({length: event.target.value})
	}

	submitHandler(event) {
		//push new data to db !!!

		// const pId = event.target[0].value
		event.preventDefault();
		console.log("hellooooo", this.state.id)
		axios.post(`http://localhost:8080/editMasterBay`, {
			id: this.state.id,
			width: this.state.width,
			height: this.state.height,
			length: this.state.length,


		})
			.then(res => {
				console.log(res.data);
				this.setState({
					masterBayInfo: res.data
				});
				console.log("called post");
				console.log(this.state.masterBayInfo);
				

			})

		console.log("finished hitting post");

	}

	deleteHandler(event) {
		//delete from the db
		let bId = this.props.match.params.id;
		bId = parseInt(bId)
		axios.delete(`http://localhost:8080/deleteMasterBay${bId}`)
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

<h1>{this.state.masterBayInfo.message}</h1>

					<form className="bar" onSubmit={this.submitHandler}>
						<label>
							ID: MB
			<input type="text" name="id" value={this.state.masterBayInfo.id} />
						</label>
						<br />

						<label>
							Height:
			<input type="text" name="height" value={this.state.masterBayInfo.height} onChange={this.handleChangeHeight()} />
						</label>
						<br />

						<label>
							Width:
			<input type="text" name="width" value={this.state.masterBayInfo.width} onChange={this.handleChangeWidth()} />
						</label>
						<br />

						<label>
							Depth:
			<input type="text" name="length" value={this.state.masterBayInfo.length} onChange={this.handleChangeLength()} />
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

					
					</form>

			</BrowserRouter>
		)
	}
}

export default EditBay

