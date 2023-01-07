import React, { Component } from "react";
import CategoryProduct from "../OrderContent/Category/CategoryProduct";
import OrderPage from "../OrderContent/OrderPage/OrderPage";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Kasir from "../OrderContent/Chart/Kasir";
import { urlApi } from "../../Api/getApi";
import axios from "axios";
import MenuCard from "../OrderContent/MenuCard/MenuCard";
import swal from "sweetalert";

class MenuContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      choose: "Food",
      chart: [],
    };
  }

  componentDidMount() {
    axios
      .get(urlApi + "products?category.nama=" + this.state.choose)
      .then((res) => {
        this.setState({
          menus: res.data,
        });
      });

     this.getListKeranjangs();
  }

  componentDidUpdate(prevState){
    if(this.state.chart !== prevState.chart){
      axios
      .get(urlApi + "keranjangs")
      .then((res) => {
        const chart = res.data;
        this.setState({
          chart
        })
      });
    }
  }

  getListKeranjangs = () => {
    axios
    .get(urlApi + "keranjangs")
    .then((res) => {
      const chart = res.data;
      this.setState({
        chart
      })
    });
  }

  changeCategory = (value) => {
    this.setState({
      choose: value,
      menus: [],
    });
    axios.get(urlApi + "products?category.nama=" + value).then((res) => {
      this.setState({
        menus: res.data,
      });
    });
  };

  addChart = (value) => {
    axios.get(urlApi + "keranjangs?product.id="+value.id).then((res) => {
      if (res.data.length === 0) {
        const chart = {
          jumlah: 1,
          total_harga: value.harga,
          product: value,
        };

        axios.post(urlApi + "keranjangs", chart).then((res) => {
          this.getListKeranjangs();
          swal({
            title: "Success to add Chart",
            text: "Success to add Chart " + chart.product.nama,
            icon: "success",
            button: false,
            timer: 2000,
          });
        });
      }else{
        const chart = {
          jumlah: res.data[0].jumlah + 1,
          total_harga: res.data[0].total_harga + value.harga,
          product: value,
        };

        axios.put(urlApi + "keranjangs/"+res.data[0].id, chart).then((res) => {
          swal({
            title: "Success to add Chart",
            text: "Success to add Chart " + chart.product.nama,
            icon: "success",
            button: false,
            timer: 2000,
          });
        });

      }
    });
  };

  render() {
    const { menus, choose, chart } = this.state;
    return (
      <div className="container-menu">
        <OrderPage />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <CategoryProduct
                changeCategory={this.changeCategory}
                choose={choose}
              />
              <Col>
                <h5>
                  <strong>Menu Items</strong>
                </h5>
                <br></br>
                <Row>
                  {menus &&
                    menus.map((menu) => (
                      <MenuCard
                        key={menu.id}
                        menu={menu}
                        chart={this.addChart}
                      />
                    ))}
                </Row>
              </Col>
              <Kasir chart={chart}{...this.props} getListKeranjangs={this.getListKeranjangs}/>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default MenuContent;
