import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import ErrorPage from "../../404/404";
import ProductPage from "../ProductPage/ProductPage";
import ServicePage from "../ServicesPage/ServicePage";
import "./ContentPage.css";

class ContentHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      status: true,
    };
    this.handlePrevent = this.handlePrevent.bind(this);
  }

  handlePrevent(e) {
    e.preventDefault();
    Swal({
      icon: "warning",
      title: "Are you sure you want Logout?",
      buttons: ["No", "Yes"],
    });
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <Fragment>
            {/* navbar content */}
            <nav>
              <div class="logo">
                <p className="logo-content">{this.props.judul}</p>
              </div>
              <ul class="mainMenu">
                <li className="list">
                  <Link to="#">Home</Link>
                </li>
                <li className="list">
                  <Link to="#">Services</Link>
                </li>
                <li className="list">
                  <Link to="#">Product</Link>
                </li>
                <li className="list list-ghost">
                  <button className="btn-vol1" onClick={this.handlePrevent}>
                    <Link className="a" to="/Sign">
                      Logout
                    </Link>
                  </button>
                </li>
              </ul>
            </nav>
            {/* content fill */}
            <div className="container-content-vol2">
              <div className="content-image-vol2">
                <img className="image-vol2" src={this.props.image} alt=""></img>
              </div>
              <div className="desc-vol2">
                <h2 id="header-vol2">{this.props.headerContent}</h2>
                <p id="txt-vol2">
                  Here is the Best Place For<br></br>
                  You to Order Fast Food
                </p>
                <button className="btn-vol3" type="button" name="button">
                  <Link  className="a-btn"to="/OrderPage"> Order Now</Link>
                </button>
              </div>
            </div>
            <ServicePage
              header_content_vol1="Fast Food"
              header_content_vol2="Free Delivery"
              header_content_vol3="Cash Back 50%"
            />
            <ProductPage />
          </Fragment>
        ) : (
          <div>
            <ErrorPage />
          </div>
        )}
      </div>
    );
  }
}

export default ContentHome;
