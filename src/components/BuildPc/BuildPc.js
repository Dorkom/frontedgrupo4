import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ProductItem from "../ProductItem/ProductItem";
import Button from "react-bootstrap/esm/Button";
import CartContext from "../../context/CartProvider";

const BuildPc = () => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [id, setId] = useState(1);

  const { cart, setCart, addItem } = useContext(CartContext);

  const getCategories = async () => {
    const data = await fetch(
      `${process.env.REACT_APP_URL_BASE}/api/categorias`
    );
    const dataResponse = await data.json();
    setCategories(dataResponse);
  };

  const getProductByCategory = async (id) => {
    const data = await fetch(
      `${process.env.REACT_APP_URL_BASE}/api/productos/${id}`
    );
    const dataResponse = await data.json();
    setProducts(dataResponse);
  };

  const handleClick = (e) => {
    const id = e.target.id.slice(-1);
    setId(id);
  };

  const handleAdd = (product) => {
    addItem(product);
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getProductByCategory(id);
  }, [id]);

  const finalPrice = () => {
    let price = 0;
    cart.forEach((product) => {
      price += product.price;
    });
    return price;
  };

  return (
    <Container className="m-0 mw-100">
      <h2 className="text-white">Your Optimized Build!</h2>
      <br />
      <Tab.Container
        id="left-tabs-example"
        defaultActiveKey={1}
        className="m-0"
      >
        <Row className="mw-100 p-0 d-flex justify-content-between ">
          <Row className="d-flex justify-content-between">
            <Col sm={8}>
              <Nav variant="pills" className="d-flex flex-wrap ">
                {categories &&
                  categories.map((category) => (
                    <Nav.Item>
                      <Nav.Link eventKey={category.id} onClick={handleClick}>
                        {category.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
              </Nav>
            </Col>
            <Col sm={4}>
              <Button className="btn -btn-primary" href="checkout">
                Ir al Carrito
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm={2} className="mt-4 ">
              <img src="./img/pcgamer.png" alt="" style={{ width: "200px" }} />
              <div
                className="text-white text-left p-2 px-4 rounded-2"
                style={{ backgroundColor: "#6c757d" }}
              >
                <p>
                  {" "}
                  <b>Components price</b>{" "}
                </p>
                <p>${finalPrice()}</p>
                <p>
                  {" "}
                  <b> Build price</b>
                </p>
                <p>$ 99</p>
              </div>
            </Col>
            <Col sm={6} style={{ overflowY: "scroll", height: "500px" }}>
              <Tab.Content className=" w-100 mt-3">
                {categories &&
                  categories.map((category) => (
                    <Tab.Pane eventKey={category.id}>
                      <>
                        {products && products.length > 0 ? (
                          products.map((product) => (
                            <ProductItem
                              key={product.id}
                              product={product}
                              handleAdd={handleAdd}
                              button={true}
                            />
                          ))
                        ) : (
                          <h1>No hay productos</h1>
                        )}
                      </>
                    </Tab.Pane>
                  ))}
              </Tab.Content>
            </Col>
            <Col
              sm={4}
              className="d-flex flex-column align-items-center mt-3  overflow-auto"
              style={{ overflowY: "scroll", height: "500px" }}
            >
              {cart.length > 0 ? (
                cart.map((product) => (
                  <ProductItem key={product.id} product={product} />
                ))
              ) : (
                <h1>No hay productos</h1>
              )}
            </Col>
          </Row>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default BuildPc;
