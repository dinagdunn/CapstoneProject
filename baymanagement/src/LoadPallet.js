import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'


class LoadPallet extends Component {
	//this "link" will be calling Spring to get us a list of Bay list recommendations 
	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this)
		this.linkHandler = this.linkHandler.bind(this)

		this.state = {
			palletInfo: {},
			buttonText: `Link`,
			pId: 0
		}
	}

	componentDidMount() {
		this.state.pId = parseInt(this.props.match.params.id);

		axios.get(`http://localhost:8080/getPaletteById?id=${this.state.pId}`)
			.then(res => {
				console.log(res.data);
				this.setState({
					palletInfo: res.data
				});	
			})

			if (this.state.palletInfo.bay !== 0) {
				this.state.buttonText = `Unlink`
			}
			// console.log("this this.state.palletInfo)
	}

	submitHandler(event) {
		event.preventDefault();

		this.props.history.push({
			pathname: `/edit/p${this.state.pId}`,
			state: { paletteInfo: this.state.palletInfo }
		})
}

	linkHandler(event) {
		event.preventDefault();

		if (this.state.buttonText === `Link`) {
			this.props.history.push({
				pathname: `/pblink/${this.state.pId}`,
				state: {paletteInfo: this.state.palletInfo}
			})
		} else if (this.state.buttonText === `Unlink`) {
			axios.post(`/editPalette`,{
				
			})
			this.props.history.push(`/load/${this.state.pId}`)
		}
	}



	render() {
		return (
			<div>
				<p>Palette ID: {this.state.palletInfo.id} </p>
				{/* <p>Palette Name: </p> */}
				<p>Palette dimensions:</p>
				<p>Width:  {this.state.palletInfo.width}</p>
				<p>Height: {this.state.palletInfo.height}</p>
				<p>Length:  {this.state.palletInfo.length}</p>
				<p>Department: {this.state.palletInfo.dep}</p>
				<p>Class: {this.state.palletInfo.paletteClass}</p>
				<p>Category: {this.state.palletInfo.category}</p>
				<p>Placed: SB{this.state.palletInfo.bay}</p>
				<p>Location: </p>

				<form onSubmit={this.submitHandler} className="bar">
					<button className="btn btn-primary" type="submit">Edit</button>
				</form>
				<form onSubmit={this.linkHandler} className="bar">
					<button className="btn btn-primary" type="submit">
						{this.state.buttonText}
					</button>
				</form>
			</div>
		)
	}
}


export default LoadPallet