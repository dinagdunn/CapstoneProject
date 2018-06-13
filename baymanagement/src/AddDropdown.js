import React, { Component } from 'react';
import './App.css';

class AddDropdown extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default AddDropdown