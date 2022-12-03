import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
//esto es para usar typeahead
import React, { useState, useContext } from "react";
import { Typeahead } from "react-bootstrap-typeahead"; // ES2015
// var Typeahead = require('react-bootstrap-typeahead').Typeahead;
import options from "./data";
import AuthContext from "../../../context/AuthProvider";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { GrGamepad } from "react-icons/gr";
import { HiShoppingCart } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";

<link
  rel="stylesheet"
  href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css"
/>;

const Header = () => {
  const { token, setLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [productsSearch, setProductsSearch] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [isLogged, setIslogged] = useState(false);
  const [id, setId] = useState("");

  const currentUrl = window.location.href;

  const handleChange = (e) => {
    const search = e.target.value ? e.target.value.toLowerCase() : "";
    setTextSearch(search);
    filterProducts(search);
  };

  const filterProducts = (search) => {
    const filteredProducts = allProducts.filter((product) => {
      return product.name.toLowerCase().includes(search);
    });
    search ? setProductsSearch(filteredProducts) : setProductsSearch("");
  };

  const getAllProducts = async () => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/producto/`
      );
      const respData = await resp.json();
      setAllProducts(respData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    setId(e.currentTarget.id);
    e.preventDefault();
  };

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    if (tokenStorage) {
      setIslogged(true);
    } else {
      setIslogged(false);
    }
  }, [token, currentUrl]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    if (id) {
      navigate(`/product/${id}`);
    }
  }, [id]);

  return (
    <Container>
      <Row xs={1}>
        <Col xs={6}>
          <h1>
            <GrGamepad />
            <i class="fa fa-gamepad" aria-hidden="true"></i>
            &nbsp;Playstation Store
          </h1>
        </Col>
        <Col xs={6} className="justify-content-md-right">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/support">Support</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/reviews">Reviews</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/ranking">Ranking</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/vendedores">Vendedores</Nav.Link>
            </Nav.Item>
            {isLogged ? (
              ""
            ) : (
              <Nav.Item>
                <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
              </Nav.Item>
            )}

            <div className="d-flex flex-column">
              <Form className="d-flex " style={{ width: "400px" }}>
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  value={textSearch}
                  onChange={handleChange}
                />
                <Button variant="outline-primary">Search</Button>
              </Form>
              <div style={{ position: "absolute", top: "80px" }}>
                {productsSearch
                  ? productsSearch.map((p) => (
                      <div
                        style={{ cursor: "pointer" }}
                        className="bg-white px-2"
                        id={p.id}
                        key={p.id}
                        onClick={(e) => handleClick(e)}
                      >
                        <div>
                          <strong className="me-auto">
                            {" "}
                            <p className="m-0">{p.name}</p>
                          </strong>
                        </div>
                        <div className="d-flex gap-4" id={p.id}>
                          <img
                            src={p.url}
                            alt=""
                            style={{ width: "60px", height: "60px" }}
                          />
                          <div
                            className="d-flex flex-column align-items-center justify-content-center  "
                            id={p.id}
                          >
                            <p className="m-0">{p.description}</p>

                            <p className="m-0">${p.price}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <Form className="d-flex">
              {isLogged && (
                <Link to="/perfil">
                  <FaUserAlt
                    className="mx-2"
                    style={{
                      fontSize: "30px",
                      paddingTop: "5px",
                    }}
                  />
                </Link>
              )}

              <Link to="/checkout">
                <HiShoppingCart
                  style={{
                    fontSize: "35px",
                    paddingTop: "5px",
                  }}
                />
              </Link>
            </Form>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
