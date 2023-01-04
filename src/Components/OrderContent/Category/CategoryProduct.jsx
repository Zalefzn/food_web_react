import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import { urlApi } from "../../../Api/getApi";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import "./CategoryProduct.css";

class CategoryProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    axios.get(urlApi +"categories").then((res) => {
      this.setState({
        categories: res.data,
      });
      console.info(res.data);
    });
  }

  render() {
    const { categories } = this.state;
    const { changeCategory, choose } = this.props;
    return (
      <Col md={2} mt="2">
        <h5>
          <strong>Category Product</strong>
        </h5>
        <hr />
        <ListGroup mt="2">
          {categories &&
            categories.map((categ) => (
              <ListGroup.Item
                key={categ.id}
                onClick={() => {
                  changeCategory(categ.nama);
                }}
                className={choose === categ.nama && "category-active"}
                style={{ cursor: "pointer" }}
              >
                <h5><strong>{categ.nama}</strong></h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}

export default CategoryProduct;
