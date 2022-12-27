import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert";
import ErrorPage from "../404/404";
import "./HomePage.css";

class HomePage extends Component {
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
      title: "Are you sure you want sign in?",
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
                <p>{this.props.judul}</p>
              </div>
              <ul class="mainMenu">
                <li className="list">
                  <Link to="/">Home</Link>
                </li>
                <li className="list list-ghost">
                  <button className="btn-vol1" onClick={this.handlePrevent}>
                    <Link className="a" to="/Sign">
                      Sign In
                    </Link>
                  </button>
                </li>
              </ul>
            </nav>
            {/* content fill */}

            <div className="container">
              <div className="content-image">
                <img className="image-vol1" src={this.props.image} alt=""></img>
              </div>
              <div className="desc">
                <h2 id="header">{this.props.headerContent}</h2>
                <p id="txt">
                  We Provide Fast Food That<br></br>
                  Can Make You Feel Delicious
                </p>
                <button className="btn-vol2" type="button" name="button">
                  More Info
                </button>
              </div>
            </div>
          </Fragment>
        ) : (
          <div>
            <ErrorPage />
          </div>
        )}
        );
      </div>
    );
  }
}

export default HomePage;
