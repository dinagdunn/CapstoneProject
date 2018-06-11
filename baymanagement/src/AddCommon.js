import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class AddCommon extends Component {

	render() {
		return (
			<div className="float-center">
				<label>
					Name:
			<input type="text" name="name" />
				</label>
				<br />

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

				<label>
					Department:
			<select name="department">
						<option value="D1">D1</option>
					</select>
				</label>
				<br />

				<label>
					Class:
			<select name="class">
						<option value="Cl1">Cl1</option>
					</select>
				</label>
				<br />

				<label>
					Category:
			<select name="category">
						<option value="Ca1">Ca1</option>
					</select>
				</label>
				<br />
				<button className="btn btn-primary" type="submit">
					Submit
                        			</button>
			</div>
		)
	}
}

export default AddCommon