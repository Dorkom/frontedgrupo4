import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import CardCheck from "./CardCheck";
import CartContext from "../../context/CartProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart } = useContext(CartContext);

  return (
    <Container style={{ marginTop: "50px" }}>
      <Row xs="auto" style={{ marginBottom: "50px" }}>
        <Col xs={8}>
          <h3>Shopping car items</h3>
        </Col>
        <Col xs={4}>
          <Link to="/payment">
            <Button className="btn btn-primary">Checkout</Button>
          </Link>
        </Col>
      </Row>

      <Row>
        {cart && cart.length != 0 ? (
          cart.map((item) => (
            <CardCheck
              key={item.id}
              id={item.id}
              srcimg={item.url}
              product={item.description}
              cost={item.price}
            />
          ))
        ) : (
          <h1 className="m-4 text-white text-center">Carrito vacio</h1>
        )}
      </Row>
    </Container>
  );
};

export default Checkout;
