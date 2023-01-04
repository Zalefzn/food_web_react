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

class MenuContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [],
      choose: "Food",
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

  render() {
    const { menus, choose } = this.state;
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
                <hr />
                <Row>
                  {menus &&
                    menus.map((menu) => <MenuCard key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Kasir />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default MenuContent;
