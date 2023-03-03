import React from "react";
import "./LoginForm.css";
import { Link, Navigate } from "react-router-dom";
import { Validation } from "simple-validator-js";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const LoginFormComponent = () => {
const [emailError, setEmailError] = useState("hidden");
function emailValidation(event){
  let inputval = event.target.value;
  setUserId(inputval);
    let ValidationInfo = new Validation(inputval).customRegex(/^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/);
    if(ValidationInfo.result.isValid === false){
      setEmailError("visible");
    }else{
      setEmailError("hidden");
    }
}
function getPassword(e){
  let inputval = e.target.value;
  setPassword(inputval);
}

const [userId, setUserId] = useState("");
const [password, setPassword] = useState("");
const {setUserInfo} = useContext(UserContext);
const [redirect, setRedirect] = useState(false);

async function loginfunction(e){
  e.preventDefault();
  const response = await fetch('http://localhost:4000/api/login', {
    method:"POST",
    body: JSON.stringify({ userId, password }),
    headers: { "Content-Type": "application/json" },
    credentials: "include"  
  });
  if(response.ok) {
    response.json().then(userInfo => {
      setUserInfo(userInfo);
      setRedirect(true);
    })
  } else{
    alert('Incorrect Credentials~~Please enter Correct Credentials');
  }
}

if(redirect){
  return <Navigate to={"/home"} />
}

  return (
    <>
      <form className="loginform" onSubmit={loginfunction}>
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
              <input placeholder=" " type="text" value={userId} required onChange={emailValidation} />
              <span>E-mail/Mobile</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:emailError}}>Please Enter a valid Email or Mobile Number</span>
            </label>
          </div>
          <div id="l2">
            <label>
              <input placeholder=" " type="password" value={password} required onChange={getPassword} />
              <span>Password</span>
              <span id="padlock"><img src={require('../../Images/padlock.png')} alt="" /></span>
            </label>
          </div>
          <span id="fg">Forgot Password?</span>
          <button>Sign In</button>
        </div>
      </form>
    </>
  );
};

export default LoginFormComponent;
