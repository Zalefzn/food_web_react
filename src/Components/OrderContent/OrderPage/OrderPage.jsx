import React, { Component, Fragment } from "react";
import "./OrderPage.css";
import ErrorPage from "../../404/404";
import swal from 'sweetalert';
import { Link } from "react-router-dom";


class OrderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      status: true,
    };
    this.handleData = this.handleData.bind(this);
  }


  handleData(e) {
    e.preventDefault();
    swal({
     icon: 'warning',
      title: "Are you sure you want close?",
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
                <p className="logo-content">FastFood</p>
              </div>
              <ul className="mainMenu-order">
                <li className="list-order">
                  <Link to="#">Order Page</Link>
                </li>
                <li className="list-order list-ghost-order">
                  <button className="btn-vol1" onClick={this.handleData}>
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
