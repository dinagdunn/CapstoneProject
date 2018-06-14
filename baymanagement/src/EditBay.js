import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class EditBay extends Component {
	constructor() {
		super();
		this.submitHandler = this.submitHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
		this.handleChangeWidth = this.handleChangeWidth.bind(this)
		this.handleChangeLength = this.handleChangeLength.bind(this)
		this.handleChangeHeight = this.handleChangeHeight.bind(this)

		this.state = {
			masterBayInfo: {
				id: 0,
				width: 0,
				height: 0,
				length: 0
			}
		}
	}

	componentDidMount() {
		let bId = this.props.match.params.id;
		this.setState({id: parseInt(bId)})

		axios.get(`http://localhost:8081/getMasterbayById?id=${bId}`)
			.then(res => {
				console.log(res.data);
				this.setState({
					masterBayInfo: res.data,
				});
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
				console.log(res.data);
				let newState = Object.assign({},this.state.masterBayInfo);
				newState.message = res.data.message
				this.setState({
					masterBayInfo: newState
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
		console.log(bId, "delete");
		axios.delete(`http://localhost:8081/deleteMasterBay?id=${bId}`)
		this.props.history.push('/?msg=deleted')
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
			// <BrowserRouter>
				<div>
					<h2>Editing MB{this.state.masterBayInfo.id}</h2>
					<form className="bar" onSubmit={this.submitHandler}>
						<label>
							Length:
							<input type="text" name="length" 
								value={this.state.masterBayInfo.length} 
								onChange={this.handleChangeLength()} />
						</label>
						<br />

						<label>
							Width:
							<input type="text" name="width" 
								value={this.state.masterBayInfo.width} 
								onChange={this.handleChangeWidth()} />
						</label>
						<br />

						<label>
							Height:
						<input type="text" name="height" 
						value={this.state.masterBayInfo.height} 
						onChange={this.handleChangeHeight()} />
						</label>
						<br />

						<h3>{this.state.masterBayInfo.message}</h3>
						<div className="row">
							<button className="btn btn-primary" 
								type="submit">
								Submit
							</button>
						</div>
					</form>

					<div>
						<button className="btn btn-primary" 
							type="submit" 
							onClick={this.deleteHandler}>
							Delete
						</button>
					</div>

					<div className="row">
						<button className="btn btn-primary" 
							type="submit" 
							onClick={this.ManageSubs}>
							Manage Sub Bays
						</button>
					</div>
				</div>
			// </BrowserRouter>
		)
	}
}

export default EditBay