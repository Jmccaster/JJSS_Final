import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { getUserId } from "../utilities/users-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";

function CartPage({ cart }) {
  //google pay
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: "CARD",
        parameters: {
          allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
          allowedCardNetworks: ["MASTERCARD", "VISA"],
        },
        tokenizationSpecification: {
          type: "PAYMENT_GATEWAY",
          parameters: {
            gateway: "example",
            gatewayMerchantId: "exampleGatewayMerchantId",
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: "12345678901234567890",
      merchantName: "Demo Merchant",
    },
    transactionInfo: {
      totalPriceStatus: "FINAL",
      totalPriceLabel: "Total",
      totalPrice: "100.00",
      currencyCode: "USD",
      countryCode: "US",
    },
  };

  function handleLoadPaymentData(paymentData) {
    console.log("load payment data", paymentData);
  }

  // google pay end
  const navigate = useNavigate();
  const id = getUserId();
  const productList = cart
    ? cart.map((element) => {
        return (
          <>
            <div>
              <div>{element.name}</div>
              <div>{element.color}</div>
              <div>${element.price}</div>
              {/* <a style={}>Delete</a> */}

              <br />
            </div>
          </>
        );
      })
    : [];

  // remove btn function
  // const handleRemove = (id) => {
  //   const arr = cart.filter((item) => item.id !== id);
  //   setCart(arr);
  //   handlePrice();
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;
  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
  }, [id]);

  return (
    <>
      <br />
      <br />
      <h1> Shopping Cart</h1>

      <div>{productList}</div>
      <h2>
        Total Price: $
        {cart.reduce((total, element) => total + parseInt(element.price), 0)}
      </h2>
      <button type="submit" className="buybtn">
        Check Out
      </button>
      <br />
      <br />
      <h5> Payment Method</h5>
      <div className="buttons">
        <GooglePayButton
          buttonType="short"
          paymentRequest={paymentRequest}
          onLoadPaymentData={handleLoadPaymentData}
        />
      </div>

      <br />
    </>
  );
}

export default CartPage;
