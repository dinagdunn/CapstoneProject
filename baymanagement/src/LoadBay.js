import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import LoadSubBay from "./LoadSubBay.js"

class LoadBay extends Component {

	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this)
		// this.subBayList = this.subBayList.bind(this)

		this.state = {
			masterBayInfo: {
				// id: 0,
				// width: 0,
				// height: 0,
				// length: 0,
				bayList: [{}]
			}


		}


	}

	componentDidMount() {
		let bId = this.props.match.params.id;
		console.log(bId)

		bId = parseInt(bId)



		axios.get(`http://localhost:8080/getMasterbayById?id=${bId}`)
			.then(res => {

				this.setState({
					masterBayInfo: res.data,
				});


				console.log("called MB");

			})



	}

	// subBayList = () => {




	clickHandler(event) {
		event.preventDefault();
		// const query = event.target[0].value
		let bId = this.props.match.params.id;
		bId = parseInt(bId)
		this.props.history.push(`/edit/mb${bId}`)
	}


	render() {

		return (
			<div className="">

				<p>MasterBay ID: {this.state.masterBayInfo.id}</p>

				<p>Master Bay dimensions: </p>
				<p>Width: {this.state.masterBayInfo.width}</p>
				<p>Height: {this.state.masterBayInfo.height}</p>
				<p>Length:  {this.state.masterBayInfo.length}</p>
				<div className="col-sm-12">
					<form onSubmit={this.clickHandler} className="bar">
						<button className="btn btn-primary" type="submit">Edit MasterBay</button>
					</form>
				</div>
				<div className="col-sm-12" >
					<LoadSubBay passedId={this.props.match.params.id} />
				</div>



			</div>


		)
	}
}



export default LoadBay