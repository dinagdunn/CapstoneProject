import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'

class PBLink extends Component {


	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)

 }
	
	  componentWillMount() {
	  	let bays = axios.get(`http://localhost:8080/getEmptyBays?id=${pId}`)
	  }
	

	clickHandler(event) {

		//push new data to db !!!
		event.preventDefault();
		const pId = event.target[0].value
		this.props.push.history('/search/`${pId}')
	}
	
	render() {
		return (
			<div>
			<ul>
			{ this.state.persons.map(person => <li>{person.name}</li>)}
		  </ul>
				<h1>This is where you link a bay and a pallet</h1>
			</div>
			
			)
	}
}

//<PastInfo pastINfo={this.state.pastInfo}> --> call this as props in the next one 
//in the PastInfo ---> 
//oconstructor(props) { super (props)}
// wrap this inside of a function ---> let weeklySales = this.props.pastInfo
export default PBLink