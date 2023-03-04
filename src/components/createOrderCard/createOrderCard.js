import React, { useState } from "react";
import "./createOrderCard.css";

export default function CreateOrderCard(props) {
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  let ops = props.ops;

  function priceHandler(flagops) {
    //console.log("hi", flagops);
    for (let i = 0; i < ops.length; i++) {
      if (flagops == ops[i].operationName) {
        ops[i].flag = !ops[i].flag;
        if (ops[i].flag == true)
          setPrice((prev) => {
            // console.log(true, ops[i].operationprice);
            return prev + ops[i].operationprice;
          });
        else {
          setPrice((prev) => {
            //  console.log(true, ops[i].operationprice);
            return prev - ops[i].operationprice;
          });
        }
      }
    }

    return;
  }

  return (
    <>
      <div id="createOrderCard-container">
        <div>
          <img
            src={`http://localhost:4000/order//pics/${props.filename}`}
            alt="logo"
            width={"30px"}
            height={"30px"}
          />
          {props.productName}
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
          <img
            src="/washing-machine.svg"
            alt="washing-machine"
            onClick={() => {
              priceHandler("Washing");
            }}
          />
          <img
            src="/ironing.svg"
            alt="ironing"
            onClick={() => {
              priceHandler("Ironing");
            }}
          />
          <img
            src="/towel.svg"
            alt="towel"
            onClick={() => {
              priceHandler("DryingClean");
            }}
          />
          <img
            src="/bleach.svg"
            alt="bleach"
            onClick={() => {
              priceHandler("ChemicalWash");
            }}
          />
        </div>
        <div>
          {price}*{qty}={price * qty}
        </div>
      </div>
    </>
  );
}
