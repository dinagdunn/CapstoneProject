import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios';

class EditPallet extends Component {

	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
		this.changeValue = this.changeValue.bind(this)
		this.state={
			id: this.props.location.state.paletteInfo.id,
			width: this.props.location.state.paletteInfo.width,
			length: this.props.location.state.paletteInfo.length,
			height:this.props.location.state.paletteInfo.height,
			dep:this.props.location.state.paletteInfo.dep,
			class:this.props.location.state.paletteInfo.paletteClass,
			category:this.props.location.state.paletteInfo.category,
			bay: this.props.location.state.paletteInfo.bay
		}
	}

	submitHandler(event) {
		event.preventDefault();
		console.log(this.props.location.state.paletteInfo)
		let palette = {}

		palette.id= this.state.id;
		palette.width= this.state.width;
		palette.length =  this.state.length;
		palette.height = this.state.height;
		palette.dep = this.state.dep
		palette.paletteClass = this.state.class
		palette.category = this.state.category;
		palette.bay = this.state.bay;
		axios.post("http://localhost:8080/editPalette",palette).then((response) =>{
		    console.log(response);
		    console.log(response.data.dimensionMatch)
		    if(response.data.dimensionMatch === false){
		    this.props.history.push({
				pathname: `/load/message`,
				state: {message: "Edit unsuccessful, the bay that is associated with this palette is smaller!"}
			})
			window.setTimeout(()=>
				this.props.history.push({
					pathname: `/edit/p${this.state.id}`,
					state: {paletteInfo: this.props.location.state.paletteInfo}
				}), 4000);
		    }else{
		    	this.props.history.push({
				pathname: `/load/message`,
				state: {message: "Edit  was successful!"}
				})
				window.setTimeout(()=>
				this.props.history.push({
					pathname: `/load/P${this.state.id}`,
					state: {paletteInfo: this.props.location.state.paletteInfo}
				}), 4000);
		    }
		}).catch(function (error) {
	    	console.log(error);
	    });		
	}

	deleteHandler(event) {
		//push new data to db !!!
		event.preventDefault();
		const pId = this.props.match.params.id;
		console.log(pId)
		this.props.history.push('/?msg=deleted')
		axios.delete(`http://localhost:8080/deletePalette?id=${pId}`)
	}

	changeValue(event,box){
		console.log(event.target)
		var stateChange = {}
		console.log(stateChange[box]);
		stateChange[box] = event.target.value
		console.log(stateChange[box]);
		this.setState(stateChange);
	}

	componentWillMount(){
		
		let departments = axios.get("http://localhost:8080/getDepartments").then((response)=>{
			const dropDowns = response.data.map((department,index)=>{
				console.log(department.value)
				if(department.value === this.state.dep){
					return (<option value={department.value} selected>{department.value}</option>)
				} else
				return (<option value={department.value}>{department.value}</option>)
			})
			this.setState({
				deps: dropDowns
			})
		})	

		let classes = axios.get("http://localhost:8080/getClasses").then((response)=>{
			const dropDowns = response.data.map((department,index)=>{
				console.log(department.value)
				if(department.value === this.state.class){
					return (<option value={department.value} selected>{department.value}</option>)
				} else
				return (<option value={department.value}>{department.value}</option>)
			})
			this.setState({
				classes: dropDowns
			})
		})	

		let categories = axios.get("http://localhost:8080/getCategories").then((response)=>{
			const dropDowns = response.data.map((department,index)=>{
				console.log(department.value)
				if(department.value === this.state.category){
					return (<option value={department.value} selected>{department.value}</option>)
				} else
				return (<option value={department.value}>{department.value}</option>)
			})
			this.setState({
				categories: dropDowns
			})
		})	

}

	render() {
		return (
			<BrowserRouter>
				<div>
				<h4>Palette: P{this.props.location.state.paletteInfo.id}</h4>
				<form id="editPalette" name="editPalette" >
					<label>
						Height:
			<input type="number" name="height" value={this.state.height} onChange={(e)=>{this.changeValue(e,'height')}}/>
					</label>
					<br />

					<label>
						Width:
			<input type="number" name="width" value={this.state.width} onChange={(e)=>{this.changeValue(e,'width')}}/>
					</label>
					<br />

					<label>
						Depth:
			<input type="number" name="depth"  value={this.state.length} onChange={(e)=>{this.changeValue(e,'length')}}/>
					</label>
					<br />
			</form>
					<label>
						Department:
			<select name="department" form="editPalette" >
							{this.state.deps}
						</select>
					</label>
					<br />

					<label>
						Class:
			<select name="class" form="editPalette">
							{this.state.classes}
						</select>
					</label>
					<br />

					<label>
						Category:
			<select name="category" form="editPalette">
							{this.state.categories}
						</select>
					</label>
					<br />

					<button className="btn btn-primary"  onClick={this.submitHandler}>Submit</button>
					<button className="btn btn-primary"  onClick={this.deleteHandler}>Delete</button>
					
				</div>
			</BrowserRouter>
		)
	}
}

export default EditPallet