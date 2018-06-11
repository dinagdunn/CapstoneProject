import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';

class AddCommon extends Component {

	state = {
		data: [
		  {id: 1, name:"a", age:29, qualification:"B.Com",rating:3,gender:"male",
			  city:"Kerala",skills:["reactjs","angular","vuejs"]},
		  {id: 2, name:"b", age:35, qualification:"B.Sc",rating:5,gender:"female",
			  city:"Mumbai",skills:["reactjs","angular"]},
		  {id: 3, name:"c", age:42, qualification:"B.E",rating:3,gender:"female",
			city:"Bangalore",skills:["reactjs"]},
		],
		current: {}
	  }
	
	  onSubmit = (model) => {
		let data = [];
		if (model.id) {
		  data = this.state.data.filter((d) => {
			return d.id != model.id
		  });
		} else {
		  model.id = +new Date();
		  data = this.state.data.slice();
		}
		
		this.setState({
		  data: [model, ...data]
		});
	  }
	
	  onEdit = (id) => {
		let record = this.state.data.find((d) => {
		  return d.id == id;
		});
		alert(JSON.stringify(record));
		this.setState({
		  current: record
		})
	  }
	
	  render() {
		let data = this.state.data.map((d) => {
		  return (
			<tr key={d.id}>
				<td>{d.name}</td>
				<td>{d.height}</td>
				<td>{d.width}</td>
				<td>{d.depth}</td>
				<td>{d.department}</td>
				<td>{d.class}</td>
				<td>{d.category}</td>
				<td><button onClick={()=>{this.onEdit(d.id)}}>edit</button></td>
			</tr>
		  );
		});
		
		return (
		  <div className="App">
			<DynamicForm className="form"
			  title = "Registration"
			  defaultValues = {this.state.current}
			  model={[
				{key: "name", label: "Name", type:"text"},
				{key: "height",label: "Height", type: "number"},
				{key: "width",label: "Width", type: "number"},
				{key: "depth",label: "Depth", type: "number"},
				{key: "department",label: "department", type:"radio",options:[
				  {key:"department",label:"Department",type:"radio",options:[
					{key:"department",label:"Department",name:"gender",value:"male"},
					{key:"category",label:"Category",name: "gender",value:"female"},
					{key:"category",label:"Category",name: "gender",value:"female"}
				]},
				{key: "class",label: "class", type:"radio",options:[
					{key:"d1",label:"d1",value:"d1"},
					  {key:"d2",label:"d2",value:"d2"},
					  {key:"d3",label:"d3",value:"d3"},
					  {key:"d4",label:"d4",value:"d4"}
				  ]},
				  {key: "category",label: "category", type:"radio",options:[
					{key:"department",label:"Department",type:"radio",options:[
					  {key:"department",label:"Department",name:"gender",value:"male"},
					  {key:"category",label:"Category",name: "gender",value:"female"},
					  {key:"category",label:"Category",name: "gender",value:"female"}
				  ]},
			  ]}
			  onSubmit = {(model) => {this.onSubmit(model)}} 
			/>
	
			<table border="1">
			  <tbody>{data}</tbody>
			</table>
	
		  </div>
		);
	}




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