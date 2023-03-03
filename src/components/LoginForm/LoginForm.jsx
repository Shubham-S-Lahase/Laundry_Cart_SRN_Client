import React from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { Validation } from "simple-validator-js";
import { useState } from "react";

const LoginFormComponent = () => {
const [emailError, setEmailError] = useState("hidden");
function emailValidation(event){
  let inputval = event.target.value;
    let ValidationInfo = new Validation(inputval).customRegex(/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/);
    if(ValidationInfo.result.isValid === false){
      setEmailError("visible");
    }else{
      setEmailError("hidden");
    }
}

  return (
    <>
      <div className="loginform">
        <div className="lh">
          <h1>
            Laundry <br /> Service
          </h1>
          <p id="p1">Doorstep Wash & Dryclean Service</p>
          <p id="p2">Don't have an account?</p>
          <Link to='/register'><button>Register</button></Link>
        </div>
        <div className="line"></div>
        <div className="rh">
          <p>SIGN IN</p>
          <div id="l1">
            <label>
              <input placeholder=" " type="text" required onChange={emailValidation} />
              <span>E-mail/Mobile</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:emailError}}>Please Enter a valid Email or Mobile Number</span>
            </label>
          </div>
          <div id="l2">
            <label>
              <input placeholder=" " type="password" required />
              <span>Password</span>
              <span id="padlock"><img src={require('../../Images/padlock.png')} alt="" /></span>
            </label>
          </div>
          <span id="fg">Forgot Password?</span>
          <button>Sign In</button>
        </div>
      </div>
    </>
  );
};

export default LoginFormComponent;
