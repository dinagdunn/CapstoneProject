import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import LoadSubBayGraphic from './LoadSubBayGraphic';



class PBLinkGraphic extends Component {

	constructor(props) {
		super(props)
		this.componentWillMount = this.componentWillMount.bind(this)
		this.render = this.render.bind(this)
		console.log(this.props)
		this.state = {
			id: this.props.location.state.paletteInfo.id,
			width: this.props.location.state.paletteInfo.width,
			length: this.props.location.state.paletteInfo.length,
			height: this.props.location.state.paletteInfo.height,
			dep: this.props.location.state.paletteInfo.dep,
			class: this.props.location.state.paletteInfo.paletteClass,
			category: this.props.location.state.paletteInfo.category,
			leftBay: 1,
			rightBay: 2
		}
	}

	componentWillMount() {
		let pId = this.props.match.params.id;
		let bays = axios.get(`http://localhost:8081/getEmptyBays?id=${pId}`).then((response) => {
			console.log("number 1 bay: ", bays)
			})
	}

	render() {
		return (
			<table className="table">
				<thead>
					<tr><h1 className="text-center">Select a Sub Bay Below</h1></tr>
					<tr>
						<th scope="col" className="col-md">MB{this.state.leftBay}</th>
						<th scope="col" className="col-2"></th>
						<th scope="col" className="col-md">MB{this.state.rightBay}</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><LoadSubBayGraphic data={this.state} count="1" history={this.props.history} /></td>
						<td className="aisle"></td>
						<td><LoadSubBayGraphic data={this.state} count="2" history={this.props.history} /></td>
					</tr>
				</tbody>
			</table>
		)
	}
}

export default PBLinkGraphic