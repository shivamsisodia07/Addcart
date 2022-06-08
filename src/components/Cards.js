import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardData from "./CardData";
const Cards = () => {
  const [data, setData] = useState(CardData);
  //   console.log(data);
  return (
    <div className='container mt-3'>
      <h2 className='text-center'>Add to cart project</h2>
      <div className='row d-flex justify-content-center align-items-center'>
        {data.map((element, id) => {
          return (
            <>
              {" "}
              <Card
                style={{ width: "22rem", border: "none" }}
                className='mx-2 mt-4 card_style'>
                <Card.Img
                  variant='top'
                  src={element.imgdata}
                  style={{ height: "16rem" }}
                  className='mt-3'
                />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>Price:{element.price}₹</Card.Text>
                  <div className='button_div d-flex justify-content-center '>
                    {" "}
                    <Button variant='primary' className='col-lg-12'>
                      Add to cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </>
          );
        })}
        {/* <Card style={{ width: "18rem" }}>
          <Card.Img variant='top' src='holder.js/100px180' />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card> */}
      </div>
    </div>
  );
};

export default Cards;
