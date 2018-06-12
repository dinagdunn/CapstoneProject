import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios';

class EditPallet extends Component {

	constructor(props) {
		super(props);
		this.submitHandler = this.submitHandler.bind(this)
		this.deleteHandler = this.deleteHandler.bind(this)
		this.changeHeight = this.changeHeight.bind(this)
		this.state={
			id: this.props.location.state.paletteInfo.id,
			width: this.props.location.state.paletteInfo.width,
			length: this.props.location.state.paletteInfo.length,
			height:this.props.location.state.paletteInfo.height,
			dep:this.props.location.state.paletteInfo.dep,
			class:this.props.location.state.paletteInfo.paletteClass,
			category:this.props.location.state.paletteInfo.category,
		}
	}

	// getDep(dep){
	// 	if(dep === this.state.dep){
	// 		return 'SELECTED'
	// 	}else{
	// 		return ""
	// 	}
	// }

	submitHandler(event) {
		//push new data to db !!!
		console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
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
		axios.post("http://localhost:8080/editPalette",palette).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
		this.props.history.push(`/load/P${this.state.id}`)
	}

	deleteHandler(event) {
		//push new data to db !!!
		event.preventDefault();
		const pId = this.props.match.params.id;
		console.log(pId)
		this.props.history.push('/?msg=deleted')
		axios.delete(`http://localhost:8080/deletePalette?id=${pId}`)
	}

	changeHeight(event,box){
		console.log(event.target)
		var stateChange = {}
		console.log(stateChange[box]);
		stateChange[box] = event.target.value
		console.log(stateChange[box]);
		this.setState(stateChange);
	}

componentWillMount(){
		
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
			console.log(this.state.categories)
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
			<input type="text" name="height" value={this.state.height} onChange={(e)=>{this.changeHeight(e,'height')}}/>
					</label>
					<br />

					<label>
						Width:
			<input type="text" name="width" value={this.state.width} onChange={(e)=>{this.changeHeight(e,'width')}}/>
					</label>
					<br />

					<label>
						Depth:
			<input type="text" name="depth"  value={this.state.length} onChange={(e)=>{this.changeHeight(e,'length')}}/>
					</label>
					<br />
			</form>
					<label>
						Department:
			<select name="department" form="editPalette" >
							<option value="D1">D1</option>
							{/*<option value="D1" {()=>{this.getDep('D1')}}>D1</option>
							<option value="D2" {()=>{this.getDep('D2')}}>D2</option>*/}
						</select>
					</label>
					<br />

					<label>
						Class:
			<select name="class" form="editPalette">
							<option value="Cl1">Cl1</option>
						</select>
					</label>
					<br />

					<label>
						Category:
			<select name="category" form="editPalette">
							{this.state.categories}
							{/*<option value="Ca1">Ca1</option>*/}
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