import React from "react";
import "./LoginPage.css";
import swal from "sweetalert";
import { Fragment } from "react";
import {Link} from 'react-router-dom';

function LoginPage() {
    
    function handlePrevent(e){
        e.preventDefault();
        swal({
            icon: "success",
            title: "Login Success",
          });

          const showHiddenPass = (inputPass,inputIcon) => {
            const input = document.getElementById(inputPass);
                  const iconEye = document.getElementById(inputIcon);
        
                    iconEye.addEventListener('click', () => {
                        if(input.type === 'password'){
                            input.type='text';
                            iconEye.classList.add('ri-eye-line');
                            iconEye.classList.remove('ri-eye-off-line');
                        }else{
                            input.type = 'password';
                            iconEye.classList.remove('ri-eye-line');
                            iconEye.classList.add('ri-eye-off-line');
                        }
                    });
        }
        
        showHiddenPass("input-pass", "input-icon");


        const getDataClass = document.querySelector('label#email');
        getDataClass.addEventListener('click',() => {
          setTimeout(() =>{
            getDataClass.style.color="blue";
        },2000);
          
        })
        
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
                  <label for="" className="login-label" id="email">
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
              <div className="login-check">
                <input type="checkbox" className="login-check-input"></input>
                {/* <input type="checkbox" className="login-check-input"> */}
                <label for="" className="login-check-label">
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <div className="login-buttons">
                <button className="login-button" onClick={handlePrevent}>
                 <Link to="/ContentHome">Login</Link>
                </button>
                <button className="login-button login-button-ghost">
                  <Link to="/Regis"
                    className="a-vol2"
                    >
                    Sign Up
                  </Link>
                </button>
              </div>
              <Link to="/Regis" className="login-forget">
                Don't Have Account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginPage;
