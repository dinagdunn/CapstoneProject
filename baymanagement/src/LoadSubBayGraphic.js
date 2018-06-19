import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import swal from 'sweetalert'


class LoadSubBayGraphic extends Component {
    constructor(props) {
        super(props);
        this.bayClick = this.bayClick.bind(this)
        this.state = {
            masterBayInfo: {
                bayList: [{}]
            },
            subBayInfo: {
                id: 0,
                width: 0,
                height: 0,
                length: 0,
                dep: "",
                bayClass: "",
                category: ""
            },
        }
    }

    componentDidMount() {
        let bId = this.props.count
        // console.log("bId: ", bId)
        axios.get(`http://localhost:8081/getMasterbayById?id=${bId}`)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    masterBayInfo: res.data,
                });
                console.log("called MB");
            })
    }

    pText(sB) {
        let pText = `Pallet ID${sB.palette} associated with subBay`
        if (sB.palette === 0) {
            pText = `No associated Pallets`
        }
        return pText
    }

    bayClick(sB) {
        console.log("click test from child")
        let palette = {}
        palette.id = this.props.data.id;
        palette.width = this.props.data.width;
        palette.length = this.props.data.length;
        palette.height = this.props.data.height;
        palette.dep = this.props.data.dep
        palette.paletteClass = this.props.data.class
        palette.category = this.props.data.category;
        palette.bay = sB.id
        axios.post(`http://localhost:8081/editPalette`, palette).then(() => {
            console.log(palette.bay)
            swal({
                title: "Pallet Linked Sucessfully",
                text: `Pallet P${palette.id} linked successfully to Bay SB${palette.bay}.`,
                icon: "success",
                button: "OK"
            })
            this.props.history.push(`/load/P${palette.id}`)
        })
    }

    //add an onClick for each of these divs, and add a Flip feature 
    render() {
        if (this.state.masterBayInfo.bayList.length === 0) {
            return (<h3>No linked Sub Bays</h3>)
        }

        if (this.state.masterBayInfo.bayList) {
            return (
                this.state.masterBayInfo.bayList.map((sB) => {
                    // console.log("sB return: ", this.state.masterBayInfo.bayList)
                    if (sB.palette === 0) {
                        return (
                            <td onClick={() => { this.bayClick(sB) }} className="subBayGraphic">
                                <p>SubBay ID: {sB.id}</p>
                                <p>SubBay Dept: {sB.dep}</p>
                                <p>SubBay BayClass: {sB.bayClass}</p>
                                <p>SubBay Category: {sB.category}</p>
                                <p>{this.pText(sB)}</p>
                            </td>)
                    } else {
                        return (
                        <td className="subBayGraphicUnavail">
                            <p>SubBay ID: {sB.id}</p>
                            <p>SubBay Dept: {sB.dep}</p>
                            <p>SubBay BayClass: {sB.bayClass}</p>
                            <p>SubBay Category: {sB.category}</p>
                            <p>{this.pText(sB)}</p>
                        </td>
                        )
                    }
                })
            )
        }
    }
}

export default LoadSubBayGraphic