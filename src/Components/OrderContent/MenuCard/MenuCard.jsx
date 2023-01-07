import React from "react";
import { Card, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { numberWithComas } from "../../../Api/utils";

function MenuCard({ menu, chart }) {
  return (
    <Col md={4} mt="2" xs={6} className="mb-4">
      <Card onClick={()=>{
        chart(menu);
      }}className="shadow"style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>{menu.nama}</Card.Title>
          <Card.Text>Rp.{numberWithComas(menu.harga)},-</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}
export default MenuCard;
