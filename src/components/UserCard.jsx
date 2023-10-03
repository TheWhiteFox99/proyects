import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function UserCard() {
  return (
    <Card style={{ width: "15rem", height: "12rem"  }}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
      <Card.Body>
        <Card.Title>Whitefox</Card.Title>
        <Card.Text>
          Nombre: Alfredo Calderon <br />
          Numero: 1001 <br />
          Tiempo: 1234568.25
        </Card.Text>
    <Button variant="primary">Pausa</Button>
      </Card.Body>
    </Card>
  );
}
