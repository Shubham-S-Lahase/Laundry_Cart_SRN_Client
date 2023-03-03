import React from "react";
import { useNavigate } from "react-router-dom";
import "./createOrderButtonPage.css";
export default function CreateOrderButtonPage() {
  const navigate = useNavigate();
  return (
    <>
      <div id="create-order-head">
        <div>Order : 0</div>
        <div id="right">
          <img src="search.svg" alt="search" />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div id="btn-container">
        <button
          onClick={() => {
            navigate("create-order");
          }}
        >
          Create Order
        </button>
      </div>
    </>
  );
}
