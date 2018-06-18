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
        console.log("bId: ", bId)
        axios.get(`http://localhost:8081/getMasterbayById?id=${bId}`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    masterBayInfo: res.data,
                });
            console.log("called MB");
            })
    }

pText(sB) {
    let pText = `Pallet ID${sB.palette} associated with subBay`
    if(sB.palette === 0) {
        pText=`No associated Pallets`
    }
    return pText
}

bayClick() {
    console.log("click test from child")
    let palette = {}
    palette.id = this.props.data.id;
    palette.width = this.props.data.width;
    palette.length = this.props.data.length;
    palette.height = this.props.data.height;
    palette.dep = this.props.data.dep
    palette.paletteClass = this.props.data.class
    palette.category = this.props.data.category;
    palette.bay = this.props.count
    axios.post(`http://localhost:8081/editPalette`, palette).then(() => {
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
                <div>
                    {this.state.masterBayInfo.bayList.map((sB) => {
                        console.log("sB return: ",this.state.masterBayInfo.bayList)
                        return (
                                <td onClick={this.bayClick} className="subBayDisplay">
                                    <p>SubBay ID: {sB.id}</p>
                                    <p>SubBay Width: {sB.width}</p>
                                    <p>SubBay Height: {sB.height}</p>
                                    <p>SubBay Length: {sB.length}</p>
                                    <p>SubBay Dept: {sB.dep}</p>
                                    <p>SubBay BayClass: {sB.bayClass}</p>
                                    <p>SubBay Category: {sB.category}</p>
                                    <p>{this.pText(sB)}</p>
                                </td>
                        )
                    })}
                </div>
            )
        }
    }
}


        export default LoadSubBayGraphic