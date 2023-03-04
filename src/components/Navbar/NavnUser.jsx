import React, { useContext, useEffect, useState } from "react";
import "./NavnUser.css";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const NavnUser = () => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const {redirect, setRedirect} = useState(false);
  useEffect(() => {
    fetch("http://localhost:4000/api/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        console.log(userInfo)
      });
    });
  }, [])

  function logout(){
    fetch('http://localhost:4000/api/logout',{
      credentials: "include",
      method: 'POST'
    });
    alert(`${User} logged out`);
    setUserInfo(null);
  }

  const userId = userInfo?.userId;
  console.log(userId);
  const User = userId.substring(0,10);

  return (
    <>
      <div className="navnusercont">
        <div>
          <span>LAUNDRY</span>
        </div>
        <div className="navuser">
          <li>Pricing</li>
          <li>Career</li>
        </div>
        <div className="user">
            {User} <br />
            <Link to={'/'}><img src={require('../../Images/logout.png')} alt="" onClick={logout} /></Link>
        </div>
      </div>
    </>
  );
};

export default NavnUser;
