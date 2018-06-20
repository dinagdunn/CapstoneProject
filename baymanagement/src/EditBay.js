import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import swal from 'sweetalert'

class EditBay extends Component {
	constructor() {
		super();
		this.submitHandler = this.submitHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
		this.handleChangeWidth = this.handleChangeWidth.bind(this)
		this.handleChangeLength = this.handleChangeLength.bind(this)
		this.handleChangeHeight = this.handleChangeHeight.bind(this)
		this.changeDepartment = this.changeDepartment.bind(this)

		this.state = {
			masterBayInfo: {
				id: 0,
				width: 0,
				height: 0,
				length: 0,
				dep: "D1"
			},
			deps: []
		}
	}

	componentDidMount() {
		let bId = this.props.match.params.id;
		this.setState({ id: parseInt(bId) })

		axios.get(`http://localhost:8081/getMasterbayById?id=${bId}`)
			.then(res => {
				console.log(res.data);
				this.setState({
					masterBayInfo: res.data,
				});
			})
		axios.get("http://localhost:8081/getDepartments")
			.then((response) => {
				console.log("departments on load: ", response.data)
				this.setState({
					deps: response.data,
					// dep: response.data[0].value
				})
			})
	}


	handleChangeWidth = () => (event) => {
		let newMasterBayInfo = Object.assign({}, this.state.masterBayInfo)
		newMasterBayInfo.width = Number(event.target.value)
		this.setState({ masterBayInfo: newMasterBayInfo })
		console.log(newMasterBayInfo);
	}

	handleChangeHeight = () => (event) => {
		let newMasterBayInfo = Object.assign({}, this.state.masterBayInfo)
		newMasterBayInfo.height = Number(event.target.value)
		this.setState({ masterBayInfo: newMasterBayInfo })
	}

	handleChangeLength = () => (event) => {
		let newMasterBayInfo = Object.assign({}, this.state.masterBayInfo)
		newMasterBayInfo.length = Number(event.target.value)
		this.setState({ masterBayInfo: newMasterBayInfo })
	}

	changeDepartment(event) {
		console.log("got to the change method:", event)
		let newMasterBayInfo = Object.assign({}, this.state.masterBayInfo)
		newMasterBayInfo.dep = event.target.value
		this.setState({ masterBayInfo: newMasterBayInfo })
	}

	submitHandler(event) {
		//push new data to db !!!
		event.preventDefault();
		console.log(this.state.masterBayInfo)
		axios.post(`http://localhost:8081/editMasterBay`, {
			id: this.state.masterBayInfo.id,
			width: this.state.masterBayInfo.width,
			height: this.state.masterBayInfo.height,
			length: this.state.masterBayInfo.length,
		})
			.then(res => {
				swal({
					title: "Edit Successful",
					icon: "success",
					button: "OK"
				})
				this.props.history.push(`/load/MB${this.state.masterBayInfo.id}`)
			})
		console.log("finished hitting post");
	}

	deleteHandler(event) {
		//delete from the db
		let bId = this.props.match.params.id;
		bId = parseInt(bId)
		console.log(bId, "delete");

		swal({
			title: "Are you sure?",
			text: `MasterBay ${bId} will be deleted`,
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then((willDelete) => {
				if (willDelete) {
					swal(`MasterBay ${bId} has been deleted`, {
						icon: "success",
					});
					axios.delete(`http://localhost:8081/deleteMasterBay?id=${bId}`)
					this.props.history.push('/')
				} else {
					swal("Delete cancelled");
				}
			});

	}

	addSubHandler(event) {
		// add to db
		let bId = this.props.match.params.id;
		bId = parseInt(bId)
		event.preventDefault();
		this.props.history.push(`/managesubs/mb${bId}`)
	}

	render() {
		return (
			<div className="formStyle">
				<form className="bar" onSubmit={this.submitHandler}>
					<h2>Editing Master Bay MB{this.state.masterBayInfo.id}</h2>
					<label>
						Length:
							<input type="number" name="length"
							value={this.state.masterBayInfo.length}
							onChange={this.handleChangeLength()} />

					</label>
					<br />

					<label>
						Width:
							<input type="number" name="width"
							value={this.state.masterBayInfo.width}
							onChange={this.handleChangeWidth()} />
					</label>
					<br />

					<label>
						Height:
						<input type="number" name="height"
							value={this.state.masterBayInfo.height}
							onChange={this.handleChangeHeight()} />

					</label>
					<br />

					<label>
						Department:
						<select name="department" onChange={this.changeDepartment}>

							{/* this was the line in question --Q*/}
							{/*{this.state.deps.map(x => <option>{x}</option>)} */}
							{console.log("deps: ", this.state.deps)}
							{this.state.deps.map(x => <option>{x.value}</option>)}
						</select>
					</label>
					<br />

					<br />
					{/* Length:
							<input type="number" name="length" 
								value={this.state.masterBayInfo.length} 
								onChange={this.handleChangeLength()} /> */}


					{/* <label>
							Height:
							<input type="number" name="height" 
							value={this.state.masterBayInfo.height} 
							onChange={this.handleChangeHeight()} />
							
							<form className="bar" onSubmit={this.submitHandler} />
						</label> */}

					<div className="row ">
						<button className="btn btn-primary custom-btn"
							type="submit">
							Submit
							</button>
					</div>
				</form>
				<br />
				<div>
					<button className="btn btn-primary custom-btn"
						type="submit"
						onClick={this.deleteHandler}>
						Delete
						</button>
				</div>
				<div className="row">
				</div>
			</div>
		)
	}
}

export default EditBay