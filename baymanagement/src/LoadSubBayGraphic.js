import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import swal from 'sweetalert'


class LoadSubBayGraphic extends Component {
    constructor(props) {
        super(props);
        this.bayClick = this.bayClick.bind(this)
        this.state = {
            exists: true,
            masterBayInfo: {
                // height: '',
                bayList: [{}]
            },
            subBayInfo: {
                id: 0,
                width: 0,
                height: 0,
                length: 0,
                dep: "",
                bayClass: "",
                category: "",
                masterBay: 0,
                palette: 0
            },
        }
    }

    componentDidMount() {
        let bId = this.props.count
        console.log("bId: ", bId)
        axios.get(`http://localhost:8081/getMasterbayById?id=${bId}`)
            .then(res => {
                console.log(res.data.bayList);
                if (res.data.bayList !== null) {
                    this.setState({
                        masterBayInfo: res.data,
                    });
                    // console.log("called MB");
                } else {
                    this.setState({
                        exists: false
                    })
                }
            })
    }

    pText(sB) {
        let pText = `Pallet ID${sB.palette} associated with subBay`
        if (sB.palette === 0) {
            pText = `No associated Pallets`
        }
        return pText
    }
    topOrNot(sB) {
        let mode = "subBayGraphic"
        if (sB.id === this.props.best) {
            mode = "subBayGraphicBest"
        }
        return mode
    }

    // setHeight() {
    //     console.log((this.state.subBayInfo.length/this.state.masterBayInfo.length)*100)
    //     return ("height sub check ",(this.state.subBayInfo.length/this.state.masterBayInfo.length)*100)
    // }

    bayClick(sB) {
        console.log("pallet check from click ", this.props.data.id)
        let palette = {}
        palette.id = this.props.data.id;
        palette.width = this.props.data.width;
        palette.length = this.props.data.length;
        palette.height = this.props.data.height;
        palette.dep = this.props.data.dep
        palette.paletteClass = this.props.data.class
        palette.category = this.props.data.category;
        palette.bay = sB.id
        sB.palette = palette.id
        axios.post(`http://localhost:8081/editPalette`, palette).then(() => {
            axios.post(`http://localhost:8081/editBay`, sB).then(() => {
                // console.log(palette.bay)
                swal({
                    title: "Pallet Linked Sucessfully",
                    text: `Pallet P${palette.id} linked successfully to Bay SB${palette.bay}.`,
                    icon: "success",
                    button: "OK"
                })
                this.props.history.push(`/load/P${palette.id}`)
            })
        })
    }

    //add an onClick for each of these divs, and add a Flip feature 
    render() {
        if (this.state.masterBayInfo.bayList.length === 0 || this.state.exists === false) {
            return (<h3>No Available Sub Bays</h3>)
        }

        if (this.state.masterBayInfo.bayList) {
            return (
                this.state.masterBayInfo.bayList.map((sB) => {
                    // this.props.setHeight
                    console.log(`sB ${sB.id} returns: `, sB.palette)
                    if (sB.palette === 0) {
                        return (
                            <td onClick={() => { this.bayClick(sB) }} className={this.topOrNot(sB)}>
                                <p>SubBay ID: {sB.id}</p>
                                <p>SubBay Dept: {sB.dep}</p>
                                <p>SubBay BayClass: {sB.bayClass}</p>
                                <p>SubBay Category: {sB.category}</p>
                                <p>{this.pText(sB)}</p>
                            </td>
                        )
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