import React, { useState } from "react";
import "./sidebar.css";
import { useNavigate } from "react-router-dom";

const SideBarComponent = () => {
  const navigate = useNavigate();
  const [createOrderIconActive, setCreateOrderIconActive] = useState(false);
  const [pastOrderIconActive, setPastOrderIconActive] = useState(false);

  const createOrderIconClick = () => {
    setCreateOrderIconActive(!createOrderIconActive);
    navigate("/home");
  };

  const pastOrderIconClick = () => {
    setPastOrderIconActive(!pastOrderIconActive);
    navigate("/home");
  };

  return (
    <>
      <aside className="sidebar">
        <div>
          <img src={require("../../Images/home.png")} alt="home" />
        </div>
        <div onClick={createOrderIconClick} style={{background:"#FFFFFF"}}>
            <img src={require("../../Images/more.png")} alt=""/>
        </div>
        <div onClick={pastOrderIconClick}>
          <img src={require("../../Images/list.png")} alt="pastOrder" />
        </div>
      </aside>
    </>
  );
};

export default SideBarComponent;
