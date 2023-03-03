import React, { useState } from "react";
import "./RegisterForm.css";
import { Link, useNavigate } from "react-router-dom";
import { City, State } from "country-state-city";
import  { Validation }  from "simple-validator-js";

const  allStates = State.getStatesOfCountry('IN');
const stateNames = allStates.map((state) => {
  return state.name;
})

const RegisterFormComponent = () => {
  
  // state and district code
  const [state, setState] = useState("");
	const [district, setDistrict] = useState("");
	const [allCities, setAllCities] = useState();
  
  const cityChangeHandler = (e) => {
		setDistrict(e.target.value);
	};
	const stateChangeHandler = (e) => {
		setState(e.target.value);

		const state = allStates.filter((state) => {
			return state.name === e.target.value;
		});
		const statecities = City.getCitiesOfState('IN', state[0].isoCode);

		const cityNames = statecities.map((data) => {
			return data.name;
		});

		setAllCities(cityNames);
	};


  // User Inputs Validation && setting state variables values
const [nameError, setNameError] = useState("hidden");
const [name, setName] = useState("");
const [emailError, setEmailError] = useState("hidden")
const [email, setEmail] = useState("");
const [mobileError, setMobileError] = useState("hidden");
const [mobile, setMobile] = useState("");
const [addressError, setAddressError] = useState("hidden");
const [address, setAddress] = useState("");
const [pincodeError, setPincodeError] = useState("hidden");
const [pincode, setPincode] = useState("");
const [passwordError, setPasswordError] = useState("hidden");
const [password, setPassword] = useState("");
const [cpasswordError, setCPasswordError] = useState("hidden");
const [cpassword,  setCPassword] = useState("");

function nameChange(event){
  let inputval = event.target.value;
  setName(inputval);
  let ValidationInfo = new Validation(inputval).minChars(3);
  if(ValidationInfo.result.isValid === false){
    setNameError("visible");
  }else{
    setNameError("hidden");
  }
} 

function emailChange(event){
  let inputval = event.target.value;
  setEmail(inputval)
    let ValidationInfo = new Validation(inputval).isEmail();
    if(ValidationInfo.result.isValid === false){
      setEmailError("visible");
    }else{
      setEmailError("hidden");
    }
}

function mobileChange(event){
  let inputval = event.target.value;
  setMobile(inputval);
    let ValidationInfo = new Validation(inputval).minChars(10).maxChars(10);
    if(ValidationInfo.result.isValid === false){
      setMobileError("visible");
    }else{
      setMobileError("hidden");
    }
}

function addressChange(event){
  let inputval = event.target.value;
  setAddress(inputval);
    let ValidationInfo = new Validation(inputval).minChars(10).maxChars(25);
    if(ValidationInfo.result.isValid === false){
      setAddressError("visible");
    }else{
      setAddressError("hidden");
    }
}

function pincodeChange(event){
  let inputval = event.target.value;
  setPincode(inputval);
    let ValidationInfo = new Validation(inputval).minChars(6).maxChars(6);
    if(ValidationInfo.result.isValid === false){
      setPincodeError("visible");
    }else{
      setPincodeError("hidden");
    }
}

function passwordChange(event){
  let inputval = event.target.value;
  setPassword(inputval);
    let ValidationInfo = new Validation(inputval).minChars(8);
    if(ValidationInfo.result.isValid === false){
      setPasswordError("visible");
    }else{
      setPasswordError("hidden");
    }
}

function cPasswordChange(event){
  let inputval = event.target.value;
  setCPassword(inputval);
    let ValidationInfo = new Validation(inputval).passwordConfirmation(password);
    if(ValidationInfo.result.isValid === false){
      setCPasswordError("visible");
    }else{
      setCPasswordError("hidden");
    }
}

// checkbox state
const [isChecked, setIsChecked] = useState(false);
function checked(){
  setIsChecked(!isChecked);
}



const navigate = useNavigate();

async function registerfunction(e) {
  e.preventDefault();
  const response = await fetch('http://localhost:4000/api/register', {
    method: 'POST',
    body: JSON.stringify({name, email, mobile, state, district, address, pincode, password}),
    headers: { 'Content-Type':'application/json' }
  });
  if(response.status === 200){
    alert('Registration Successful');
    navigate('/')
  } else{
    alert('registration failed');
  }
 
}

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
            <p>REGISTER</p>
            <form  onSubmit={registerfunction}>
            <div id="field1">
            <label>
              <input placeholder=" " type="text" value={name} required onChange={nameChange} />
              <span>Name</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:nameError}}>This field is required.Name should be at least 3 chars long.</span>
            </label>
            </div>
            <div id="field2">
            <label>
              <input placeholder=" " type="text" value={email} required onChange={emailChange} />
              <span>E-mail</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:emailError}}>Please Enter a valid Email</span>
            </label>
            </div>

            <div id="field3">
            <label>
              <input placeholder=" " type="text" value={mobile} required onChange={mobileChange} />
              <span>Phone</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:mobileError}}>Please Enter a valid Mobile Number</span>
            </label>
            </div>
            <div id="field4">
            <select
							name="states"
							id="state"
							placeholder="States"
							value={state}
							onChange={stateChangeHandler}
							autoComplete="off"
							required
						>
							<option>State</option>
							{stateNames.map((name, idx) => (
								<option key={idx}>{name}</option>
							))}
						</select>
            </div>

              <div id="field5">
            <select
									name="city"
									id="city"
									value={district}
									onChange={cityChangeHandler}
									autoComplete="off"
									required
						>
							<option>District</option>
									{state &&
											allCities.map((name, idx) => (
													<option key={idx}>{name}</option>
											))}
						</select> 
            </div>

            <div id="field6">
            <label>
              <input placeholder=" " type="text" value={address} required onChange={addressChange} />
              <span>Address</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:addressError}}>Address length should be min:10 chars, max:25chars</span>
            </label>
            </div> 

            <div id="field7">
            <label>
              <input placeholder=" " type="text" value={pincode} required onChange={pincodeChange} />
              <span>Pincode</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:pincodeError}}>Please Enter a valid 6 digit pincode</span>
            </label>
            </div>
            <div id="field8">
            <label>
              <input placeholder=" " type="text" value={password} required onChange={passwordChange} />
              <span>Password</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:passwordError}}>Password should  be at least 8 chars long</span>
            </label>
            </div>

            <div id="field9">
            <label>
              <input placeholder=" " type="text" value={cpassword} required onChange={cPasswordChange} />
              <span>Confirm Password</span>
              <span style={{marginTop:"30px", marginLeft:"180px", color:"red", fontWeight:"bold", visibility:cpasswordError}}>Password doesn't match</span>
            </label>
            </div>
            <div id="tc">
                <input type="checkbox" onClick={checked} />
                <h5>I agree to terms and conditions, receiving marketing and promotional materials</h5>
            </div>
            <div>
              <button className={isChecked ? "checked" : "unchecked"}>Register</button>
            </div>
            </form>
            </div>
      </div>
    </>
  );
};

export default RegisterFormComponent;
