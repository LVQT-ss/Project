import React from "react";
import { Card } from "react-bootstrap";
import "../styles/Card.css";
const TimeshareCard = ({
  title,
  imageUrl,
  checkIn,
  checkOut,
  starRating,
  price,
  onClick,
}) => {
  return (
    <Card onClick={onClick} style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Check-in: {checkIn} <br />
          Check-out: {checkOut} <br />
          Rating: {starRating} <br />
          Price: {price}$
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default TimeshareCard;
