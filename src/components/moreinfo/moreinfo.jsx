import React from "react";
import "./moreinfo.css";

const MoreinfoComponent = () => {
  return (
    <>
      <div className="info-container">
        <div className="about">
          <p id="p1info">ABOUT US</p>
          <p id="p2info">Doorstep Wash & Dryclean Service</p>
        </div>
        <div className="submenu1">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Home
          </p>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>Sign In</p>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>Register</p>
        </div>
        <div className="submenu2">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Pricing
          </p>
        </div>
        <div className="submenu3">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Career
          </p>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>Blogs</p>
          <p style={{ fontSize: "14px", marginTop: "20px" }}>Create</p>
        </div>
        <div className="submenu4">
          <p
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Pricing
          </p>
        </div>
        <div className="icons">
          <p>SOCIAL MEDIA</p>
          <img src={require("../../Images/facebook.png")} alt="" />
          <img src={require("../../Images/instagram.png")} alt="" />
          <img src={require("../../Images/linkedin.png")} alt="" />
        </div>
      </div>
    </>
  );
};

export default MoreinfoComponent;
