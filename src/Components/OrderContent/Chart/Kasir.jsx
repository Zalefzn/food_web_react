import React, { Component } from "react";
import { Col, ListGroup, Row, Badge, } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalPay from "../../Payment/TotalPayment";
import ModalChart from "../ModalChart/ModalChart";
import { urlApi } from "../../../Api/getApi";
import swal from "sweetalert";
import axios from "axios";


class Kasir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      kasirDetail: false,
      total: 0,
      descript: "",
    };
  }

  handleShow = (chartMenu) => {
    this.setState({
      showModal: true,
      kasirDetail: chartMenu,
      total: chartMenu.jumlah,
      descript: chartMenu.keteragan,
    });
  };

  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };

  tambah = () => {
    this.setState({
      total: this.state.total + 1
    })
  }

  kurang = () => {
    if(this.state.total !== 1){
      this.setState({
        total: this.state.total - 1
      })
    }
  }

  changeHandle = (event) => {
    this.setState({
      descript: event.target.value,
    })
  }

  handleSubmit = (event) => { 
    event.preventDefault();
    this.handleClose();

    const data = {
      total: this.state.total,  
      total_harga: this.state.total_harga,
      proucts: this.state.kasirDetail.product,
      keterangan: this.state.descript,
    }

    axios.put(urlApi + "keranjangs/"+this.state.kasirDetail.id, data).then((res) => {
      this.props.getListKeranjangs();
      swal({
        title: "Success Update",
        text: "Success Update Pesanan" + data.product.nama,
        icon: "success",
        button: false,
        timer: 2000,
      });
    });

  } 

  render() {
    const { chart } = this.props;
    return (
      <Col md={3} mt="2">
        <h5>
          <strong>Chart Product</strong>
        </h5>
        <br></br>
        {chart.length !== 0 && (
          <ListGroup variant="flush">
            {chart.map((chartMenu) => (
              <ListGroup.Item
                key={chart.id}
                onClick={() => this.handleShow(chartMenu)}
              >
                <Row>
                  <Col xs="2">
                    <h4>
                      <Badge pill variant="success">
                        {chartMenu.jumlah}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{chartMenu.product.nama}</h5>
                    <p>Rp.{chartMenu.product.harga},-</p>
                  </Col>
                  <Col>
                    <strong className="float-right">
                      Rp.{chartMenu.total_harga},-
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
            <ModalChart 
            handleClose={this.handleClose}{...this.state}
            tambah={this.tambah}
            kurang={this.kurang}
            />
          </ListGroup>
        )}
        <TotalPay chart={chart} {...this.props} />
      </Col>
    );
  }
}
export default Kasir;
