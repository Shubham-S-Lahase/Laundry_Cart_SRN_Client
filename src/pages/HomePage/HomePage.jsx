import React from "react";
import "./HomePage.css";
import SideBarComponent from "../../components/sideBar/sidebar";
import NavnUser from "../../components/Navbar/NavnUser";
import FooterComponent from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <div class="homecontainer">
        <div class="navnuser">
            <NavnUser/>
        </div>
        <div class="sidebar">
            <SideBarComponent/>
        </div>
        <div class="nfooter">
            <FooterComponent/>
        </div>
        <div class="outlet"></div>
      </div>
    </>
  );
};

export default HomePage;
