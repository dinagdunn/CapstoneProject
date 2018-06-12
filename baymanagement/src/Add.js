import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'
import axios from 'axios'

class Add extends Component {


	constructor(props) {
		super(props)
		this.state = {
			selectedOption: 'Pallet',
			height: '',
			width: '',
			depth: '',
			department: '',
			class: '',
			category: '',
			queryId: 0
		}

		this.changeHeight = this.changeHeight.bind(this)
		this.changeWidth = this.changeWidth.bind(this)
		this.changeDepth = this.changeDepth.bind(this)
		this.changeDepartment = this.changeDepartment.bind(this)
		this.changeClass = this.changeClass.bind(this)
		this.changeCategory = this.changeCategory.bind(this)

		this.handleOptionChange = this.handleOptionChange.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}

	changeHeight(e) {
		this.setState({ height: e.target.value })
	}

	changeWidth(e) {
		this.setState({ width: e.target.value })
	}

	changeDepth(e) {
		this.setState({ depth: e.target.value })
	}

	changeDepartment(e) {
		this.setState({ department: e.target.value })
	}

	changeClass(e) {
		this.setState({ class: e.target.value })
	}

	changeCategory(e) {
		this.setState({ category: e.target.value })
	}

	handleOptionChange(event) {
		this.setState({
			selectedOption: event.target.name
		})
	}

	submitHandler(event) {
		event.preventDefault();

		if (this.state.selectedOption === 'Pallet') {
			this.state.queryURL = `http://localhost:8080/addPallet`
		}
		
		if (this.state.selectedOption === 'Master Bay') {
			this.state.queryURL = `http://localhost:8080/addMasterBay`
		}

		//push to spring
		axios.post(this.state.queryURL, {
			height: this.state.height,
			width: this.state.width,
			depth: this.state.depth,
			// department: this.state.department,
			// class: this.state.class,
			// category: this.state.category
		  })
		  .then(function (response) {
			// console.log("coming back: ",response.data);
			console.log("queryId: ",response.data)
			this.setState({queryId: response.data})
		  })
		  .catch(function (error) {
			console.log(error);
		  });


		// const queryId = 'p101'
		this.props.history.push(`/load/${this.state.queryId}`)
	}


	render() {
		return (
			<div className="float-center">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3">

							<div className="col-sm-3">
								<div className="form-check">
									<label className="form-check-label">
										<input type="radio" className="form-check-input"
											name="Pallet"
											checked={this.state.selectedOption === 'Pallet'}
											onChange={this.handleOptionChange}
										/>Pallet
		 								</label>
								</div>
							</div>

							<div className="col-sm-3">
								<div className="form-check">
									<label className="form-check-label">
										<input type="radio" className="form-check-input"
											name="Master Bay"
											checked={this.state.selectedOption === 'Master Bay'}
											onChange={this.handleOptionChange}
										/>Master Bay
										</label>
								</div>
							</div>

						</div>
					</div>

					<div>
							<form onSubmit={this.submitHandler}>
								<AddCommon 
								changeName = {this.changeName}
								changeHeight = {this.changeHeight}
								changeWidth = {this.changeWidth}
								changeDepth = {this.changeDepth}
								changeDepartment = {this.changeDepartment}
								changeClass = {this.changeClass}
								changeCategory = {this.changeCategory}
								/>
							</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Add