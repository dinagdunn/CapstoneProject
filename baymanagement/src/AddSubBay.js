import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class AddSubBay extends Component {

	constructor(props) {
		super(props)

		this.state = {
			id: this.props.location.state.masterBayInfo.id,
			width: this.props.location.state.masterBayInfo.width,
			height: this.props.location.state.masterBayInfo.height,
			dep: this.props.location.state.masterBayInfo.dep,
			tooWide: ""
		}

		this.changeLength = this.changeLength.bind(this)
		this.changeClass = this.changeClass.bind(this)
		this.changeCategory = this.changeCategory.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}

	componentWillMount() {
		console.log("from the mount: ",this.props.location.state.masterBayInfo)
		let classes = axios.get("http://localhost:8081/getClasses").then((response) => {
			const dropDowns = response.data.map((department, index) => {
				console.log(department.value)
				return (<option value={department.value}>{department.value}</option>)
			})
			this.setState({
				classes: dropDowns,
				bayClass: dropDowns[0].props.value
			})
		})

		let categories = axios.get("http://localhost:8081/getCategories").then((response) => {
			const dropDowns = response.data.map((department, index) => {
				console.log(department.value)
				return (<option value={department.value}>{department.value}</option>)
			})
			this.setState({
				categories: dropDowns,
				category: dropDowns[0].props.value
			})
		})

	}

	changeLength(e) {
		this.setState({ length: e.target.value })
	}

	changeClass(e) {
		this.setState({ class: e.target.value })
	}

	changeCategory(e) {
		this.setState({ category: e.target.value })
	}

	submitHandler(event) {
		event.preventDefault();
		console.log("at the submit: ",this.state.dep)
		axios.post(`http://localhost:8081/addBay`, {
			height: this.state.height,
			width: this.state.width,
			length: this.state.length,
			dep: this.state.dep,
			bayClass: this.state.bayClass,
			category: this.state.category,
			masterbay: this.state.id,
			palette: 0
		})
			.then((response) => {
				console.log(response.data)
				if (response.data.message === "Add successful") {
					this.props.history.push(`/load/MB${this.state.id}`)
				} else if (response.data.message === "Bay too wide") {
					this.setState({
						tooWide: "Bay too wide"
					})
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<div className="float-center" >
				<div className="container" >
					<div className="row col-12" >
						<h2>Add a Sub Bay</h2>
						<form onSubmit={this.submitHandler} >
							<label>
								Length:
						<input type="number" onChange={this.changeLength}
									name="length" />
							</label>
							<br />

							<label>
								Width: {this.state.width}
								<input type="number" className="id" placeholder={this.state.width}
									name="width" />
							</label>
							<br />

							<label>
								Height: {this.state.height}
								<input type="number" className="id" placeholder={this.state.height}
									name="height" />
							</label>
							<br />

							<label>
								Department: {this.state.dep}
							</label>
							<br />

							<label>
								Class:
						<select name="class" form="editPalette" onChange={this.changeClass}>
									{this.state.classes}
								</select>
							</label>
							<br />

							<label>
								Category:
						<select name="category" form="editPalette" onChange={this.changeCategory}>
									{this.state.categories}
								</select>
							</label>
							<br />
							<h3>{this.state.tooWide}</h3>
							<button className="btn btn-primary custom-btn"
								type="submit">
								Submit
						</button>
						</form >
					</div >
				</div >
			</div>
		)
	}
}

export default AddSubBay