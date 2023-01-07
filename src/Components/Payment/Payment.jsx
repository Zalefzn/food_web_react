import React, {Component} from 'react';
import axios from 'axios';
import { urlApi } from '../../Api/getApi';
import {Link} from 'react-router-dom';
import './Payment.css';

class Payment extends Component{
    constructor(props){
        super(props);
        this.state ={
            status: true,
        }
    }
    componentDidMount(){
        axios
        .get(urlApi + "keranjangs")
        .then((res) => {
          const chart = res.data;
          chart.map(function(item){
            return axios.delete(urlApi + "keranjangs/"+item.id)
            .then((res)=>{
                console.info(res);
            })
          })
        });
    }

    render(){
        return(
            <div className="payment-content">
                <img className="pay-img"src="payment.png" alt=""></img>
                <h2 className="payment-judul">Sukses Payment</h2>
                <button className="payment-btn"type="button"><Link to="/OrderPage">Back</Link></button>
            </div>
        );
    }
}
export default Payment;