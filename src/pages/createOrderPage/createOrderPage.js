import React from "react";
import "./createOrderPage.css";
import { useEffect, useState } from "react";
import CreateOrderCard from "../../components/createOrderCard/createOrderCard";

export default function CreateOrderPage() {
  const [ProductList, setProductList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/productList")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProductList((prev) => {
          return data.result;
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        <div id="order-childCards">
          {ProductList.map((ele, ind) => {
            let operationdetails = ele.operationDetails.map((obj, idx) => {
              return { ...obj, flag: false };
            });
            return (
              <CreateOrderCard
                id={ind}
                productName={ele.productName}
                filename={ele.image}
                ops={operationdetails}
              />
            );
          })}
        </div>
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
