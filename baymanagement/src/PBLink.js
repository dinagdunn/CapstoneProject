import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'

class PBLink extends Component {


	constructor() {
		super()
		this.clickHandler = this.clickHandler.bind(this)


 }
	
	  componentWillMount() {
	  	let bays = axios.get(`http://localhost:8080/getEmptyBays?id=${pId}`)
	  }

	clickHandler(event) {
		event.preventDefault();
			//push new data to db !!!

			
		console.log('we chose this', this.state.selectedOption)
		// const pId = event.target[0].value
		const pId = 'p5643245'
		this.props.history.push(`/load/${pId}`)
	}

	render() {
		return (
			<div>
				<h1>Select a bay location</h1>
				<ol>
					{ this.state.persons.map(person => 
					<li onClick = { this.state.selectedOption = person.name}  
					onClick = { this.clickHandler } >
					{person.name}
					</li> )}
				</ol>
			</div>

		)
	}
}

//<PastInfo pastINfo={this.state.pastInfo}> --> call this as props in the next one 
//in the PastInfo ---> 
//oconstructor(props) { super (props)}
// wrap this inside of a function ---> let weeklySales = this.props.pastInfo
export default PBLink