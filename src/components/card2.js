import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { ListGroup, Row } from "react-bootstrap";
const CustomCard2 = (props) => {
  return (
    <div>
      <Row>
        <p>{props.header}</p>
      </Row>
      <Row>
        <ListGroup variant="flush">
          <ListGroup.Item variant="dark">{props.title}</ListGroup.Item>
          <ListGroup.Item variant="light">{props.children}</ListGroup.Item>
        </ListGroup>
      </Row>
    </div>
  );
};

export default CustomCard2;
