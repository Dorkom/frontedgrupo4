import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { IoTrashBin } from "react-icons/io5";
import { useContext } from "react";
import CartContext from "../../../context/CartProvider";

const CardCheck = (props) => {
  const { srcimg, product, cost, id } = props;
  const { deleteItem } = useContext(CartContext);

  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <Row>
      <Col>
        <img src={srcimg} height="100px" />
      </Col>
      <Col>{product}</Col>
      <Col>${cost}</Col>
      <Col>
        <Button variant="danger" onClick={handleDelete}>
          <IoTrashBin />
        </Button>{" "}
      </Col>
    </Row>
  );
};

export default CardCheck;
