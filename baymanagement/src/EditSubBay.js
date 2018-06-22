import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import axios from 'axios';
import swal from 'sweetalert'

class EditSubBay extends Component {
    constructor(props) {
        super(props);
        this.submitHandler = this.submitHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
        this.changeValue = this.changeValue.bind(this)
        this.state = {
            id: this.props.location.state.subBayInfo.id,
            width: this.props.location.state.subBayInfo.width,
            length: this.props.location.state.subBayInfo.length,
            height: this.props.location.state.subBayInfo.height,
            dep: this.props.location.state.subBayInfo.dep,
            class: this.props.location.state.subBayInfo.bayClass,
            category: this.props.location.state.subBayInfo.category,
            palette: this.props.location.state.subBayInfo.palette,
            masterbay: this.props.location.state.subBayInfo.masterbay
        }
    }

    submitHandler(event) {
        event.preventDefault();
        // console.log(this.props.location.state.subBayInfo)
        let subBay = {}
        subBay.id = this.state.id;
        subBay.width = this.state.width;
        subBay.length = this.state.length;
        subBay.height = this.state.height;
        subBay.dep = this.state.dep
        subBay.bayClass = this.state.class
        subBay.category = this.state.category;
        subBay.masterbay = this.state.masterbay;
        axios.post("http://localhost:8081/editBay", subBay).then((response) => {
            // console.log(response);
            console.log(response.data.message)
            if (response.data.message === "Bay too wide") {
                swal({
                    title: response.data.message,
                    icon: "error",
                    button: "OK"
                })
            } else if (response.data.message === "Bay width too small for palette P...") {
                swal({
                    title: response.data.message,
                    icon: "error",
                    button: "OK"
                })
            } else if (response.data.message === "Edit successful") {
                swal({
                    title: "Edit Successful",
                    icon: "success",
                    button: "OK"
                })
                this.props.history.push(`/load/MB${this.state.masterbay}`)
            }
        })
    }

    deleteHandler(event) {
        event.preventDefault();
        const pId = this.props.match.params.id;
        console.log(pId)
        
        axios.delete(`http://localhost:8081/deleteBay?id=${pId}`).then(
            swal({
                title: "Bay Deleted Successfully",
                icon: "success",
                button: "OK"
            }),
            this.props.history.push(`/loadMB${this.state.masterbay}`)
        )
    }

    changeValue(event, box) {
        console.log(event.target)
        var stateChange = {}
        console.log(stateChange[box]);
        stateChange[box] = event.target.value
        console.log(stateChange[box]);
        this.setState(stateChange);
    }


    componentWillMount() {

        let departments = axios.get("http://localhost:8081/getDepartments").then((response) => {
            const dropDowns = response.data.map((department, index) => {
                // console.log(department.value)
                if (department.value === this.state.dep) {
                    return (<option value={department.value} selected>{department.value}</option>)
                } else
                    return (<option value={department.value}>{department.value}</option>)
            })
            this.setState({
                deps: dropDowns
            })
        })

        let classes = axios.get("http://localhost:8081/getClasses").then((response) => {
            const dropDowns = response.data.map((department, index) => {
                // console.log(department.value)
                if (department.value === this.state.class) {
                    return (<option value={department.value} selected>{department.value}</option>)
                } else
                    return (<option value={department.value}>{department.value}</option>)
            })
            this.setState({
                classes: dropDowns
            })
        })

        let categories = axios.get("http://localhost:8081/getCategories").then((response) => {
            const dropDowns = response.data.map((department, index) => {
                // console.log(department.value)
                if (department.value === this.state.category) {
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
                    <h4>Sub Bay: P{this.props.location.state.subBayInfo.id}</h4>
                    <form id="editSubBay" name="editSubBay" >
                        <label>
                            Length:
                            <input type="number" name="depth"
                                value={this.state.length} onChange={(e) => {
                                    this.changeValue(e, 'length')
                                }}
                            />
                        </label>
                        <br />

                        <label>
                            Width: {this.state.width}
                        </label>
                        <br />

                        <label>
                            Height: {this.state.height}
                        </label>
                        <br />
                        <label>
                            Department: {this.state.dep}
                        </label>
                        <br />

                        <label>
                            Class:
            <select name="class" form="editSubBay">
                                {this.state.classes}
                            </select>
                        </label>
                        <br />

                        <label>
                            Category:
            <select name="category" form="editSubBay">
                                {this.state.categories}
                            </select>
                        </label>
                        <br />
                    </form>
                    <button className="btn btn-primary custom-btn" onClick={this.submitHandler}>Submit</button>
                    <button className="btn btn-primary custom-btn" onClick={this.deleteHandler}>Delete</button>
                </div>
            </BrowserRouter>
        )
    }
}

export default EditSubBay