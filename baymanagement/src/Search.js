import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class Search extends Component {

    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(event) {
        event.preventDefault();
        const query = event.target[0].value

        if (query) {
            if (query[0].toUpperCase() === "P") {
                axios.get(`http://localhost:8081/getPaletteById?id=${query.substring(1)}`)
                    .then(res => {
                        console.log("axios comes back with: ",res.data.id)
                        if (res.data.id === 0) {
                            //sweet alert about data not found
                            console.log("not here for pallets")
                        } else {
                            this.props.history.push(`/load/${query}`)
                        }
                    })
            }

            else if (query.substring(0,2).toUpperCase() === "MB") {
                console.log("MB string check: ", query.substring(2))
                axios.get(`http://localhost:8081/getMasterbayById?id=${query.substring(2)}`)
                    .then(res => {
                        console.log("axios comes back with: ",res.data.id)
                        if (res.data.id === 0) {
                            //sweet alert about data not found
                            console.log("not here for masterbays")
                        } else {
                            this.props.history.push(`/load/${query}`)
                        }
                    })
                
        } else {
            // console.log("this is where the bad search goes")
            document.querySelector('[data-error]').style.display = "block";
            //DISPLAY A SWEET ALERT HERE ABOUT THE BAD SEARCH
        }
    }
}


    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.clickHandler} className="bar">
                    <input type="text" />

                    {/* <LoadPallet palletInfo={this.props.palletInfo}/> */}
                    <button 
                    className="btn btn-primary custom-btn" 
                    type="submit"
                    onClick = { this.buttonTest }
                    >Search</button>

                </form>
                <div style={{ display: "none" }} data-error>
                    <h3>Incorrect value. Please try again.</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default Search