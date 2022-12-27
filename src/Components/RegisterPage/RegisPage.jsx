import React from "react";
import "./RegisterPage.css";
import swal from "sweetalert";
import { Fragment } from "react";
import {Link} from 'react-router-dom';

function RegisterPage() {

    function handlePrevent(e){
        e.preventDefault();
        swal({
            icon: "success",
            title: "Register Success",
          });
    }
  return (
    <Fragment>
      <div className="container">
        <div className="login-content">
          <img
            src="food_order14.png"
            alt=""
            className="login-img"
          ></img>
          {/* <img src="food_order10.png" alt="login image" className="login-img"> */}
          <form action="" className="login-form">
            <div>
              <h1 className="login-title">
                <span>Welcome</span> Back
              </h1>
              <p className="login-desc">Welcome! Please login to continue.</p>
            </div>

            <div>
              <div className="login-inputs">
                <div>
                  <label for="" className="login-label">
                    Username
                  </label>
                  <input
                    type="username"
                    placeholder="Enter Your Username"
                    required
                    className="login-input"
                  ></input>
                  {/* <input type="email" placeholder="Enter Your Email Address" required className="login-input"> */}
                </div>
                <div>
                  <label for="" className="login-label">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email Address"
                    required
                    className="login-input"
                  ></input>
                  {/* <input type="email" placeholder="Enter Your Email Address" required className="login-input"> */}
                </div>
                <div>
                  <label for="" className="login-label">
                    Password
                  </label>
                  <div className="login-box">
                    <input
                      type="password"
                      placeholder="Enter Your Password"
                      required
                      className="login-input"
                      id="input-pass"
                    ></input>
                    {/* <input type="password" placeholder="Enter Your Password" required className="login-input" id="input-pass"> */}
                    <i
                      className="ri-eye-off-line login-eye"
                      id="input-icon"
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="login-buttons">
                <button className="login-button" onClick={handlePrevent}>
                 <Link to="/ContentHome">Register</Link>
                </button>
              </div>
              <Link to="/Sign" className="login-forget">
                You Have Account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default RegisterPage;
