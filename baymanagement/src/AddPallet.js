import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import AddCommon from './AddCommon.js'

class AddPallet extends Component {

    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
        console.log(props);
    }

    palletHandler(event) {
        event.preventDefault();
        //push to spring
        // const query = event.target[0].value
        const query = 'p101'
        this.props.history.push(`/load/${query}`)
        console.log(this.props);
        console.log(event);
        }

    render() {
        return (
                <div>
                    <form onSubmit={this.clickHandler}>
                        <AddCommon />
                        <button className="btn btn-primary" type="submit">
                        Submit
                        </button>
                    </form>
                </div>
        )
    }
}

export default AddPallet