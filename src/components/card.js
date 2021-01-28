import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Card, Col, Row } from "react-bootstrap";
const CustomCard = (props) => {
  return (
    <div>
      <Card bg="dark" text="light" style={{ width: "18rem" }} className="mb-2">
        <Card.Header>{props.header}</Card.Header>
        <Card.Body>
          <Card.Title> {props.title} </Card.Title>
          <Card.Text>{props.children}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CustomCard;
