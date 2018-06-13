import React, { Component } from 'react';
import './App.css';

class AddCommon extends Component {
	render() {
		return (
			<div className="float-center">
				<label>
					Height:
			<input type="text" name="height" />
				</label>
				<br />

				<label>
					Width:
			<input type="text" name="width" />
				</label>
				<br />

				<label>
					Depth:
			<input type="text" name="depth" />
				</label>
				<br />
			</div>
		)
	}
}

export default AddCommon