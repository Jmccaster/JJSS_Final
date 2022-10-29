import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { eachProduct } from "../utilities/products-services";
import { Card, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Detail({ cart, setCart, gender }) {
  const [eachproduct, seteachproduct] = useState({});

  const geteachProducts = async (gender) => {
    // const productdetails = await eachProduct(genderparam);
    const productdetails = await eachProduct(gender);
    // console.log(productdetails);
    seteachproduct({
      list: productdetails.data.allProducts,
    });
  };

  useEffect(() => {
    geteachProducts(gender);
  }, [gender]);

  const productdetailList = eachproduct.list
    ? eachproduct.list.map((element) => {
        return (
          <Card style={{ width: "17rem" }} key={element._id} className="m-5">
            <Card.Img variant="top" src={`${element.image}`} />
            <Card.Body className="d-flex flex-column justify-content-center align-items-center">
              <Card.Title>{element.name}</Card.Title>
              <Card.Text>{element.description}</Card.Text>
              <Card.Text>{element.category}</Card.Text>
              <Card.Text>${element.price}</Card.Text>
              <Card.Text> {element.gender}</Card.Text>
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
    <Container className="d-flex p-3 justify-content-evenly flex-wrap">
      {productdetailList}
    </Container>
  );
}
export default Detail;
