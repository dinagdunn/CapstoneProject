import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'

class PBLink extends Component {
//everything in the pallet controller works

	constructor() {
		super();
		this.clickHandler = this.clickHandler.bind(this)
		this.state = {
			persons: []
		  }
 }

//  let searchParams = {
// 	 str: str, 

 
	//axios.post('', searchParams)
	
	  componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`,
	{params: {
		id: 1
	}})
		  .then(res => {
			const persons = res.data;
			this.setState({ persons });
		  })
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