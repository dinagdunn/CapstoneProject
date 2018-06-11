import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'

class Add extends Component {


	constructor(props) {
		super(props);
		this.state = {
			selectedOption: 'Pallet'
		}
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.palletHandler = this.palletHandler.bind(this)
		this.masterHandler = this.masterHandler.bind(this)
	}

	handleOptionChange(event) {
		console.log(this.props);
		this.setState({
			selectedOption: event.target.name
		})
	}

	palletHandler(event) {
		event.preventDefault();
		//push to spring

		const formToJSON = elements => [].reduce.call(elements, (data, element) => {
			data[element.name] = element.value;
			return data;
		  }, {});
		
		  console.log("form data object take 1: ", formToJSON)
		// const query = event.target[0].value
		const query = 'p101'
		this.props.history.push(`/load/${query}`)
		console.log(this.props);
		console.log(event);
	}

	masterHandler(event) {
		event.preventDefault();
		//push to spring
		// const query = event.target[0].value

		const formToJSON = elements => [].reduce.call(elements, (data, element) => {
			data[element.name] = element.value;
			return data;
		  }, {});
		
		  console.log("form data object take 1: ", formToJSON)

		const query = 'mb101'
		console.log(query)
		this.props.history.push(`/load/${query}`)
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
						{this.state.selectedOption === 'Pallet' &&
							<form onSubmit={this.palletHandler}>
								<AddCommon />
							</form>
						}
						{this.state.selectedOption === 'Master Bay' &&
							<form onSubmit={this.masterHandler}>
								<AddCommon />
							</form>
						}
					</div>
				</div>
			</div>
		)
	}
}

export default Add