import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styles from "./index.module.css";

function DoctorCard({doctor}) {

const { name, rating, image, description } = doctor;


  return (
    <Card className={styles.card}>
      <div className={styles.imageContainer}>
        <Card.Img src={image} />
      </div>
      <Card.Body>
        <Card.Title className={styles.nombre}>{name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Rating: {rating}/10</small>
      </Card.Footer>
    </Card>
  );
}

export default DoctorCard;
