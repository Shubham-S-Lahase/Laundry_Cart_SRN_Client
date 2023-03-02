import React from "react";
import NavbarComponent from "../../components/Navbar/Navbar";
import AdvComponent from "../../components/adv/adv";
import MoreinfoComponent from "../../components/moreinfo/moreinfo";
import FooterComponent from "../../components/Footer/Footer";
import LoginFormComponent from "../../components/LoginForm/LoginForm";


const LoginPage = () => {
  return (
    <>
      <div className="logincontainer">
        <div className="navbar">
          <NavbarComponent />
        </div>
        <div className="login">
          <LoginFormComponent/>
        </div>
        <div className="adv">
            <AdvComponent/>
        </div>
        <div className="moreinfo">
           <MoreinfoComponent/>
        </div>
        <div className="footer">
            <FooterComponent/>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
