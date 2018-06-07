import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import LoadPallet from './LoadPallet.js'
import LoadBay from './LoadBay.js'
// import SearchFail from './SearchFail.js'

class Search extends Component {

    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this)
        this.state = {
            search: true
        }
    }

    clickHandler(event) {
      
        console.log(event.target)

        event.preventDefault();
        const query = event.target[0].value
           
        if (query[0].toUpperCase() === "P" || query[0].toUpperCase() === "B") {
                this.props.history.push(`/load/${query}`)
        } else {
            document.querySelector('[data-error]').style.display = "block";
        }
    }

    render() {

        return (
            <React.Fragment>
            <form onSubmit={this.clickHandler} className="bar">
                <input type="text"/>
                

                <button className="btn btn-primary" type="submit">Search</button>
               
            </form>
            <div style={{display: "none"}} data-error>
                <h3>Incorrect value. Please try again.</h3>
                </div>
                </React.Fragment>


        )
    }
}

export default Search