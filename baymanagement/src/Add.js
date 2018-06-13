import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class Add extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedOption: 'Pallet',
			height: '',
			width: '',
			length: '',
			department: 'D1',
			class: 'Cl1',
			category: 'Ca1',
		}
		this.changeHeight = this.changeHeight.bind(this)
		this.changeWidth = this.changeWidth.bind(this)
		this.changeLength = this.changeLength.bind(this)
		this.changeDepartment = this.changeDepartment.bind(this)
		this.changeClass = this.changeClass.bind(this)
		this.changeCategory = this.changeCategory.bind(this)
		this.handleOptionChange = this.handleOptionChange.bind(this)
		this.submitHandler = this.submitHandler.bind(this)
	}

	componentDidMount() {
		console.log("Mounted")
	}

	changeHeight(e) {
		this.setState({ height: e.target.value })
		console.log("height here:", e.target.value)
	}

	changeWidth(e) {
		this.setState({ width: e.target.value })
	}

	changeLength(e) {
		this.setState({ length: e.target.value })
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
		this.setState({ selectedOption: event.target.name })
	}

	submitHandler(event) {
		event.preventDefault();
		if (this.state.selectedOption === 'Pallet') {
			console.log("dept: ", this.state.department)
			axios.post(`http://localhost:8080/addPalette`, {
					height: this.state.height,
					width: this.state.width,
					length: this.state.length,
					dep: this.state.department,
					paletteClass: this.state.class,
					category: this.state.category,
					bay: 0
				})
				.then((response) => {
					console.log("Pallet ID: ", response.data)
					this.props.history.push(`/load/P${response.data}`)
				})
				.catch(function (error) {
					console.log(error);
				});
		}

		else if (this.state.selectedOption === 'Master Bay') {
			axios.post(`http://localhost:8080/addMasterBay`, {
					height: this.state.height,
					width: this.state.width,
					length: this.state.length,
				})
				.then((response) => {
					console.log("Bay ID: ", response.data)
					this.props.history.push(`/load/MB${response.data}`)
				})
				.catch(function (error) {
					console.log(error);
				});
		}
	}

	render() {
		return ( 
		<div className = "float-center" >
			<div className = "container" >
				<div className = "row float-center col-12" >
					<div className = "col-sm-6 col-sm-offset-3" >
						<div className = "col-sm-3" >
							<div className = "form-check" >
								<label className = "form-check-label" >
									<input type = "radio"
										className = "form-check-input"
										name = "Pallet"
										checked = { this.state.selectedOption === 'Pallet'}
										onChange = { this.handleOptionChange }
									/>
									Pallet 
								</label > 
								</div> 
							</div >

					<div className = "col-sm-3" >
						<div className = "form-check" >
							<label className = "form-check-label" >
								<input type = "radio"
									className = "form-check-input"
									name = "Master Bay"
									checked = { this.state.selectedOption === 'Master Bay' }
									onChange = { this.handleOptionChange }
								/>
								Master Bay 
								</label > 
							</div> 
						</div > 
					</div> 
			</div >

			<div >
				<form onSubmit = { this.submitHandler } >
					<label >
						Height:
						<input type = "text" onChange = {this.changeHeight}
							name = "height" />
					</label> 
					<br />

					<label>
						Width:
						<input type = "text" onChange = {this.changeWidth}
							name = "width" />
					</label> 
					<br />

					<label>
						Length:
						<input type = "text" onChange = {this.changeLength}
							name = "length" />
					</label> 
					<br /> 
		
						{this.state.selectedOption === 'Pallet' &&
							<div>
							<label>
								Department:
								<select name="department" onChange = {this.changeDepartment}>
									<option value="D1">D1</option>
									<option value="D2">D2</option>
									<option value="D3">D3</option>
									<option value="D4">D4</option>
								</select>
							</label>
							<br />
		
							<label>
								Class:
								<select name="class" onChange = {this.changeClass}>
									<option value="Cl1">Cl1</option>
									<option value="Cl2">Cl2</option>
									<option value="Cl3">Cl3</option>
									<option value="Cl4">Cl4</option>
								</select>
							</label>
							<br />
		
							<label>
								Category:
								<select name="category" onChange = {this.changeCategory}>
									<option value="Ca1">Ca1</option>
									<option value="Ca2">Ca2</option>
									<option value="Ca3">Ca3</option>
									<option value="Ca4">Ca4</option>
								</select>
							</label>
							<br />
							</div>
						}

					<button className = "btn btn-primary"
						type = "submit">
						Submit 
					</button> 					
				</form > 
			</div> 
		</div > 
	</div>
	)
}
}

export default Add