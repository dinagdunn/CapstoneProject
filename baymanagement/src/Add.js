import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'
import AddPallet from './AddPallet.js'
import AddMaster from './AddMaster.js'
import AddSub from './AddSub.js'


class Add extends Component {


	constructor() {
		super();
		this.state = {
			selectedOption: 'Pallet'
		}
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleOptionChange(event) {
		this.setState({
		  selectedOption: event.target.name
		})
	  }


	render() {
		return (
				<BrowserRouter>
					<div className="float-center">
						<div className="col-sm-6 col-sm-offset-3">
							<div className="col-xs-4">
								<div className="form-check">
									<label className="form-check-label">
										<input type="radio" class="form-check-input"
											name="Pallet" 
											checked={this.state.selectedOption === 'Pallet'} 
											onChange={this.handleOptionChange} 
											/>Pallet
									</label>
								</div>
							</div>

							<div className="col-xs-4 ">
								<div className="form-check">
									<label className="form-check-label">
										<input type="radio" class="form-check-input"
											name="Master Bay" 
											checked={this.state.selectedOption === 'Master Bay'} 
											onChange={this.handleOptionChange}
											/>Master Bay
						</label>
								</div>
							</div>

							<div className="col-xs-4">
								<div className="form-check">
									<label className="form-check-label">
										<input type="radio" 
										className = "form-check-input"
											name="Sub Bay" 
											checked={this.state.selectedOption === 'Sub Bay'} 
											onChange={this.handleOptionChange}
											/>Sub Bay
						</label>
								</div>
							</div>
						</div>

						<form>
							<br />
							<br />
							{/* <AddCommon /> */}

							{this.state.selectedOption === 'Pallet' && 
							<AddPallet /> }
							{ this.state.selectedOption === 'Master Bay' && 
							<AddMaster /> }
							{ this.state.selectedOption === 'Sub Bay' &&
							<AddSub /> }
						</form>

					</div>
				</BrowserRouter>
			) 
	}
}

export default Add