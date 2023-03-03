import React from "react";
import "./createOrderPage.css";
export default function CreateOrderPage() {
  return (
    <>
      <div id="create-order-top">
        <div style={{ fontWeight: "bolder" }}>Create Order</div>
        <div id="right">
          <img src="/search.svg" alt="searchicon" />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div id="createorder-titlehead">
        <ul>
          <li>Product types</li>
          <li>Quantity</li>
          <li>Wash Type</li>
          <li>Price</li>
        </ul>
        <div id="order-childCards"></div>
        <div id="proceed-container">
          <button style={{ color: "white", backgroundColor: "#5861AE" }}>
            Proceed
          </button>
          <button style={{ color: "#5861AE" }}>Cancel</button>
        </div>
      </div>
    </>
  );
}
