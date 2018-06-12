import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'


class LoadPallet extends Component {
	//this "link" will be calling Spring to get us a list of Bay list recommendations 
	constructor(props) {
		super(props);
		this.clickHandler = this.clickHandler.bind(this)
		this.linkHandler = this.linkHandler.bind(this)

		this.state = {
			palletInfo: {},
			buttonText: `Link`
		}
	}

	componentDidMount() {
		let pId = this.props.match.params.id;
		pId = parseInt(pId)

		axios.get(`http://localhost:8080/getPaletteById?id=${pId}`)
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

	clickHandler(event) {
		event.preventDefault();
		let pId = this.props.match.params.id;
		pId = parseInt(pId)


		if (this.state.buttonText === `Link`) {
		this.props.history.push({
			pathname: `/edit/p${pId}`,
			state: {paletteInfo: this.state.palletInfo}
		})
	} else if (this.state.buttonText === `Unlink`) {
		// axios.post() {}
		this.props.history.push(`/load/p${pId}`)
	}
}

	linkHandler(event) {
		event.preventDefault();
		const query = this.props.match.params.id
		this.props.history.push({
			pathname: `/pblink/P${query}`,
			state: {paletteInfo: this.state.palletInfo}
		})
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

				<form onSubmit={this.clickHandler} className="bar">
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