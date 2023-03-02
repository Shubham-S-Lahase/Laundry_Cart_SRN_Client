import React from "react";
import "./RegisterPage.css";
import NavbarComponent from "../../components/Navbar/Navbar";
import AdvComponent from "../../components/adv/adv";
import MoreinfoComponent from "../../components/moreinfo/moreinfo";
import FooterComponent from "../../components/Footer/Footer";
import RegisterFormComponent from "../../components/RegisterForm/RegisterForm";

const RegisterPage = () => {
  return (
    <>
      <div className="registercontainer">
        <div className="navbar">
          <NavbarComponent/>
        </div>
        <div className="login">
        <RegisterFormComponent/>
        </div>
        <div className="adv">
          <AdvComponent />
        </div>
        <div className="moreinfo">
          <MoreinfoComponent />
        </div>
        <div className="footer">
          <FooterComponent />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
