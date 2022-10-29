// All products page
import React from "react";
import { useState, useEffect } from "react";
import { allProducts } from "../utilities/products-services";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, Container } from "react-bootstrap";
import ProductCarousel from "./../Components/ProductCarousel";

function Allproducts({ cart, setCart }) {
  const [products, setproducts] = useState({});
  const getallProducts = async (e) => {
    const productsall = await allProducts();
    console.log(productsall);
    setproducts({
      list: productsall.data.allProducts,
    });
  };
  useEffect(() => {
    getallProducts();
  }, []);

  //   console.log(products.list);

  const productList = products.list
    ? products.list.map((element) => {
        return (
          <Card style={{ width: "17rem" }} key={element._id} className="m-5">
            <Card.Img variant="top" src={element.image} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>{element.name}</Card.Title>
              <Card.Text>{element.color}</Card.Text>
              <Card.Text>${element.price}</Card.Text>
              <Button
                variant="primary"
                onClick={() => {
                  setCart([...cart, element]);
                  console.log(cart);
                }}
              >
                Buy
              </Button>
            </Card.Body>
          </Card>
        );
      })
    : [];

  return (
    <div>
      <div>{/* <ProductCarousel /> */}</div>
      <Container className="d-flex p-3 justify-content-center flex-wrap">
        {productList}
      </Container>
    </div>
  );
}
export default Allproducts;
