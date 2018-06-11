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
			palletInfo: {
				// id: 0,
				// width: 0,
				// height: 0,
				// length: 0,
				// dep: "",
				// paletteClass: "",
				// category: "",
				// bay: 0
			}
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



	}

	clickHandler(event) {
		event.preventDefault();
		let pId = this.props.match.params.id;
		pId = parseInt(pId)
		// const query = event.target[0].value

		this.props.history.push({
			pathname: `/edit/p${pId}`,
			state: {paletteInfo: this.state.palletInfo}
		})
	}

	linkHandler(event) {
		event.preventDefault();
		// const query = event.target[0].value
		const query = 'p100'
		this.props.history.push(`/pblink/${query}`)
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
					<button className="btn btn-primary" type="submit">Link</button>
				</form>
			</div>
		)
	}
}


export default LoadPallet