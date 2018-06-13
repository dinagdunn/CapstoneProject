import React, { Component } from 'react';
import './App.css';
import AddDropdown from './AddDropdown.js';

class AddCommon extends Component {
	render() {
	return ( 
		<div>
			<label >
				Height:
				<input type = "text" onChange = {this.props.changeHeight}
					name = "height" />
			</label> 
			<br />

			<label>
				Width:
				<input type = "text" onChange = {this.props.changeWidth}
					name = "width" />
			</label> 
			<br />

		<label>
			Depth:
				<input type = "text" onChange = {this.props.changeDepth}
					name = "depth" />
			</label> 
			<br /> 
		
		{/* {this.state.selectedOption === 'Pallet' &&
			<AddDropdown /> 
		} */}

		<button className = "btn btn-primary"
			type = "submit" >
			Submit 
		</button> 
		</div>
		)
	}
}

export default AddCommon