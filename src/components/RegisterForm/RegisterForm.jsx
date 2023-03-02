import React from "react";
import "./RegisterForm.css";
import { Link } from "react-router-dom";

const RegisterFormComponent = () => {
  return (
    <>
      <div className="registerform">
        <div className="reglh">
          <h1>
            Laundry <br /> Service
          </h1>
          <span>Doorstep Wash &</span>
          <span>Dryclean Service</span>
          <p>Already have an account</p>
          <Link to="/"><button>Sign In</button></Link>
        </div>
        <div className="regline"></div>
        <div className="regrh">
          
        </div>
      </div>
    </>
  );
};

export default RegisterFormComponent;
