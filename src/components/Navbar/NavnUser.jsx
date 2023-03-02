import React from "react";
import "./NavnUser.css";

const NavnUser = () => {
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
            username <br />
            <img src={require('../../Images/logout.png')} alt="" />
        </div>
      </div>
    </>
  );
};

export default NavnUser;
