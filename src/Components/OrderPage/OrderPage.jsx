import React, { Component, Fragment } from "react";
import "./OrderPage.css";
import ErrorPage from "../404/404";
import Swal from "sweetalert";
import { Link } from "react-router-dom";

class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      status: true,
    };
  }

  handlePrevent(e) {
    e.preventDefault();
    Swal({
      icon: "Warning",
      title: "Are you sure want close?",
      buttons: ["No", "Yes"],
    });
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <Fragment>
            <nav>
              <div className="logo-orderPage">
                <p>FastFood</p>
              </div>
              <ul className="mainMenu-order">
                <li className="list-order">
                  <Link to="#">Order Page</Link>
                </li>
                <li className="list-order list-ghost-order">
                  <button className="btn-vol1" onClick={this.handlePrevent}>
                    <Link className="a" to="/ContentHome">
                      Close
                    </Link>
                  </button>
                </li>
              </ul>
            </nav>
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

export default OrderPage;
