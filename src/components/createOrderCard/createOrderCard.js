import React, { useState } from "react";
import "./createOrderCard.css";

export default function CreateOrderCard(props) {
  const [qty, setQty] = useState(0);
  return (
    <>
      <div id="createOrderCard-container">
        <div>
          <img
            src={`http://localhost:4000/order//pics/${props.filename}`}
            alt="logo"
          />
          {/* {props.productName} */}
          Shirt
        </div>
        <div>
          <input
            id="inp-qty"
            type="text"
            onChange={(e) => {
              setQty((prev) => {
                return e.target.value;
              });
            }}
            value={qty}
          />
        </div>
        <div id="ops-container">
          <img src="/washing-machine.svg" alt="washing-machine" />
          <img src="/ironing.svg" alt="ironing" />
          <img src="/towel.svg" alt="towel" />
          <img src="/bleach.svg" alt="bleach" />
        </div>
        <div>{/* {price} */}250</div>
      </div>
    </>
  );
}
