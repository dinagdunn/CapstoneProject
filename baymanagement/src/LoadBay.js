import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'

class LoadBay extends Component {

	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
		this.subBayList = this.subBayList.bind(this)

		this.state = {
			masterBayInfo: {
				// id: 0,
				// width: 0,
				// height: 0,
				// length: 0,
				// dep: "",
				// paletteClass: "",
				// category: "",
				// bay: 0

				bayList: [{}]
			}
		}
	}


	componentDidMount() {
		let bId = this.props.match.params.id;
		console.log(bId);

		bId = parseInt(bId)



		axios.get(`http://localhost:8080/getMasterbayById?id=${bId}`)
			.then(res => {
				console.log(res.data);
				this.setState({
					masterBayInfo: res.data
				});

				console.log("called MB");
				// console.log(this.state.masterBayInfo.bayList);
			})



		//@CrossOrigin needs to be added above @RequestMapping for these requests to Work!!!

		// @CrossOrigin
		// @RequestMapping(value ="/getPaletteById", method = RequestMethod.GET)
		// public Palette getPaletteById(@RequestParam("id") int id) {
		// 	System.out.println(id);
		// 	return paletteService.getPaletteById(id);
		// }

	}

	subBayList = () => {
		if (this.state.masterBayInfo.bayList) {
			let bayList = this.state.masterBayInfo.bayList			
			bayList.forEach((elem) => {
					return (<div className="subBay">
						<p>Sub Bay List:</p>
							elem.id
							elem.width
							elem.height
							elem.length
							elem.dep
							elem.paletteClass
							elem.category
							elem.bay
					</div>)
				
			})
		}
	}


	clickHandler(event) {
		event.preventDefault();
		// const query = event.target[0].value
		const query = 'b100'
		this.props.history.push(`/edit/${query}`)
	}


	render() {
		// let html_bayList = [];


		//  for(let i=0; i<this.state.masterBayInfo.bayList.length; i++){
		// 	 console.log(this.state.masterBayInfo.bayList[i]);
		//  }

		//console.log(elem);
		// 	html_bayList.push(<h1>bay_obj.id</h1>);




		return (
			<div>

				<p>MasterBay ID: {this.state.masterBayInfo.id}</p>
				{/* <p>Bay Name: </p> */}
				<p>Master Bay dimensions: </p>
				<p>Width: {this.state.masterBayInfo.width}</p>
				<p>Height: {this.state.masterBayInfo.height}</p>
				<p>Length:  {this.state.masterBayInfo.length}</p>
				<p>Sub Bay List: {this.subBayList()}
				</p>

				<form onSubmit={this.clickHandler} className="bar">
					<button className="btn btn-primary" type="submit">Edit</button>
				</form>
			</div>
		)
	}
}



export default LoadBay