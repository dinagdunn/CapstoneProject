import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'


class LoadSubBay extends Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
        // this.subBayList = this.subBayList.bind(this)


        this.state = {
            masterBayInfo: {

                bayList: [{}]
            }
        }


    }


    componentDidMount() {
        let bId = this.props.passedId

        axios.get(`http://localhost:8080/getMasterbayById?id=${bId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    masterBayInfo: res.data,

                });

                console.log("called MB");

            })
    }
    clickHandler(event) {
        event.preventDefault();

        let bId = this.props.match.params.id;
        bId = parseInt(bId)
        this.props.history.push(`/edit/mb${bId}`)
    }


    //add an onClick for each of these divs, and add a Flip feature 
    render() {

        if (this.state.masterBayInfo.bayList.length === 0) {
            return (<h3>No linked Sub Bays</h3>)
        }

        if (this.state.masterBayInfo.bayList) {
            return (
                <div>
                    <h3>Associated SubBays</h3>
                    {this.state.masterBayInfo.bayList.map((sB =>
                        <div className="col-sm-4 subBayDisplay">
                            <p>SubBay ID: {sB.id}</p>
                            <p>SubBay Width: {sB.width}</p>
                            <p>SubBay Height: {sB.height}</p>
                            <p>SubBay Length: {sB.length}</p>
                            <p>SubBay Dept: {sB.dep}</p>
                            <p>SubBay BayClass: {sB.bayClass}</p>
                            <p>SubBay Category: {sB.category}</p>
                            <p>Palette ID{sB.palette} associated with subBay</p>
                        </div>
                    ))}
                </div>

            )


        }
    }
}


export default LoadSubBay