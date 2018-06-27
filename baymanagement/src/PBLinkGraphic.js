import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import LoadSubBayGraphic from './LoadSubBayGraphic';
import swal from 'sweetalert'



class PBLinkGraphic extends Component {

	constructor(props) {
		super(props)
		this.componentWillMount = this.componentWillMount.bind(this)
		this.render = this.render.bind(this)
		// console.log(this.props)
		this.state = {
			id: this.props.location.state.paletteInfo.id,
			width: this.props.location.state.paletteInfo.width,
			length: this.props.location.state.paletteInfo.length,
			height: this.props.location.state.paletteInfo.height,
			dep: this.props.location.state.paletteInfo.dep,
			class: this.props.location.state.paletteInfo.paletteClass,
			category: this.props.location.state.paletteInfo.category,
			leftBay: -5,
			rightBay: -5,
			bestChoiceBay: 0,
			noReturnsWarning: ""
		}
	}

	componentWillMount() {
		let pId = this.props.match.params.id;
		axios.get(`http://localhost:8081/getEmptyBays?id=${pId}`).then((response) => {
			//   console.log(response.data[0])
			if (response.data[0]) {
				let topBay = response.data[0]
				this.setState({
					bestChoiceBay: response.data[0].id
				})
				console.log("master for top", topBay.masterbay)
				console.log("top id ", topBay.id)
				console.log("top full data: ", topBay)
				if (topBay.masterbay % 2 === 0) {
					this.setState({
						leftBay: (topBay.masterbay - 1),
						rightBay: topBay.masterbay
					})
				} else {
					this.setState({
						leftBay: topBay.masterbay,
						rightBay: (topBay.masterbay + 1)
					})
				}
			} else {
				this.setState({
					noReturnsWarning: "No available bays matched this pallet."
				})
			}

			// console.log("left then right",this.state.leftBay,this.state.rightBay)
		})
	}

	setHeight(h) {
		// console.log("height from sub ", h)
		let sty = `height: ${h}%`
		return sty
	}

	render() {
		if (this.state.leftBay === -5 && !this.state.noReturnsWarning) {
			return <div />
		} else if (this.state.noReturnsWarning) {
			swal({
				title: "No Available Bays",
				text: `No bays match the dimensions of Pallet P${this.state.id}.`,
				icon: "error",
				button: "OK"
			})
			this.props.history.push(`/load/P${this.state.id}`)
		}

		return (
			<div>
				<h1>Select a Sub Bay Below</h1>
				<table className="table">
					<thead>
						<tr>
							<th scope="col" className="col-md-5">MB{this.state.leftBay}</th>
							<th scope="col" className="col-2"></th>
							<th scope="col" className="col-md-5">MB{this.state.rightBay}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td><LoadSubBayGraphic
								data={this.state}
								count={this.state.leftBay}
								history={this.props.history}
								best={this.state.bestChoiceBay}
							// style={this.setHeight}
							/></td>
							<td className="aisle"><p>The green bay is the best fit.
								Please use it if possible.</p></td>
							<td><LoadSubBayGraphic
								data={this.state}
								count={this.state.rightBay}
								history={this.props.history}
								best={this.state.bestChoiceBay}
							// style={this.setHeight}
							/></td>
						</tr>
					</tbody>
				</table>
			</div>
		)
	}
}

export default PBLinkGraphic