import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { urlApi } from "../../Api/getApi";
import { Link } from "react-router-dom";
import './TotalPayment.css';

class TotalPay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };

    this.submitTotalPay = this.submitTotalPay.bind(this);
  }

  submitTotalPay = (totalPayment) => {
    const pesanan = {
      total_bayar: totalPayment,
      menus: this.props.chart,
    };

    axios.post(urlApi + "pesanans", pesanan).then((res) => {
      this.props.history.push("/Payment");
    });
  };

  render() {
    const totalPayment = this.props.chart.reduce(function (res, itm) {
      return res + itm.total_harga;
    }, 0);
    
    return (
      <div className="fixed-bottom">
        <Row>
          <Col md={{ span: 3, offset: 9 }} className="px-4">
            <h4>
              Total Price :{" "}
              <strong className="float-right mr-2">Rp.{totalPayment},-</strong>
            </h4>
            <Link to="/Payment">
              <button className="button-click"type="button" name="button" onClick={() => {this.submitTotalPay(totalPayment);}}>
                <strong>Payment</strong>
              </button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TotalPay;
