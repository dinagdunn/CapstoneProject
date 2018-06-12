import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'

class PBLink extends Component {
	//everything in the pallet controller works

	constructor() {
		super()
		this.clickHandler = this.clickHandler.bind(this)
		this.state = {
			persons: [],
			selectedOption: 'i am a placeholder value'
		}
	}

	//  let searchParams = {
	// 	 str: str, 


	//axios.post('', searchParams)

	componentDidMount() {
		axios.get(`https://jsonplaceholder.typicode.com/users`,
			{
				params: {
					id: 1
				}
			})
			.then(res => {
				const persons = res.data;
				this.setState({ persons });
			})
	}

	clickHandler(event) {
		//push new data to db !!!
		event.preventDefault();
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
					{this.state.persons.map(person => 
					<li 
					onClick = 
					{ this.state.selectedOption = person.name,
					this.clickHandler
					}>
					{person.name}
					</li>)
				}
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