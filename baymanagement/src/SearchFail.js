import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Search from './Search.js'

class SearchFail extends Component {

	render() {
		return (
			<h1>Invalid Search Term, please enter again.</h1>
			)
	}
}

export default SearchFail