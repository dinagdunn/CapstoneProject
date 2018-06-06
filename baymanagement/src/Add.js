import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'

class Add extends Component {


	constructor() {
		super();
		this.state = {
			selectedOption: 'option1'
		}
	}

	edit = (item) => (event) => {
		this.setState({ [item]: event.target.value == "false" ? true : false })
	}

	render() {
		return (
				<BrowserRouter>
					<div className="float-center">
						<div className="col-sm-6 col-sm-offset-3">
							<div className="col-xs-4">
								<div class="form-check">
									<label class="form-check-label">
										<input type="radio" class="form-check-input"
											name="Pallet" checked={this.state.selectedOption === 'Pallet'}
											onChange={this.edit('selectedOption')} />Pallet
									</label>
								</div>
							</div>

							<div className="col-xs-4 ">
								<div class="form-check">
									<label class="form-check-label">
										<input type="radio" class="form-check-input"
											name="Master Bay" checked={this.state.selectedOption === 'Master Bay'}
											onChange={this.edit('selectedOption')} />Master Bay
						</label>
								</div>
							</div>

							<div className="col-xs-4">
								<div class="form-check">
									<label class="form-check-label">
										<input type="radio" class="form-check-input"
											name="Sub Bay" checked={this.state.selectedOption === 'Sub Bay'}
											onChange={this.edit('selectedOption')} />Sub Bay
						</label>
								</div>
							</div>
						</div>

						<form>
							<br />
							<br />
							<AddCommon />

							<input type="submit" value="Submit" />
						</form>

					</div>
				</BrowserRouter>
			) 
	}
}

export default Add