import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import { getUserId } from "../utilities/users-service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CartPage({ cart }) {
  const navigate = useNavigate();
  const id = getUserId();
  const productList = cart
    ? cart.map((element) => {
        return (
          <div>
            <div>{element.name}</div>
            <div>{element.color}</div>
            <div>${element.price}</div>
            <br />
          </div>
        );
      })
    : [];
  useEffect(() => {
    if (!id) {
      navigate("/login");
    }
  }, [id]);

  return (
    <>
      <h1> Shopping Cart</h1>

      <div>{productList}</div>
      <h2> Total Price</h2>
      <button type="submit">buy</button>
      <br />
      <br />
      <h2> Payment Method: paypal...</h2>

      <br />
    </>
  );
}

export default CartPage;
