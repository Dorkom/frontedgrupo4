import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import AuthContext from "../../context/AuthProvider";
import CartContext from "../../context/CartProvider";
import ModalFinish from "../Modal/ModalFinish";
import Modal from "../Modal/ModalFinish";
import ProductItem from "../ProductItem/ProductItem";

const Payment = () => {
  const [userInfo, setUserInfo] = useState(AuthContext);
  const [isVisible, setIsVisible] = useState(false);

  const { cart } = useContext(CartContext);
  const { userLogin } = useContext(AuthContext);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  const getUser = async (userLogin) => {
    try {
      const data = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/user/${userLogin}`
      );
      const dataResponse = await data.json();
      setUserInfo(dataResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const postOrder = async () => {
    const dataSend = {
      UsuarioId: userLogin,
      products: cart,
      total: totalPrice,
    };
    try {
      const data = await fetch(`${process.env.REACT_APP_URL_BASE}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataSend),
      });
      const dataResponse = await data.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    postOrder();
    setIsVisible(true);
  };

  useEffect(() => {
    getUser(userLogin);
  }, []);

  return (
    <Row>
      <Col xs={8}>
        <h1>Payment</h1>
        <div
          className=" d-flex flex-column  align-items-start justify-content-around bg-white rounded-2 p-4 "
          style={{ height: "79vh" }}
        >
          <h3>Contact Information</h3>
          <div className="d-flex  w-100">
            <img src="" alt="" />
            <div className="d-flex flex-column">
              <p>{userInfo.name}</p>
              <p>{userInfo.email}</p>
            </div>
          </div>
          <div className=" w-100 d-fex flex-column align-items-center">
            <h3>Shipping Address</h3>
            <div>
              <label htmlFor="">Pais</label>
              <input
                type="text"
                name="country"
                value={userInfo.country}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Ciudad</label>
              <input
                type="text"
                name="city"
                value={userInfo.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="">Direccion</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleChange}
              />
            </div>
            <div className="  d-flex justify-content-between">
              <div>
                <label htmlFor="">Zip Code</label>
                <input
                  type="text"
                  name="cp"
                  value={userInfo.cp}
                  onChange={handleChange}
                />
              </div>
              <div className="mx-4">
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary" onClick={handleClick}>
                <span>Finalizar Compra</span>
              </button>
            </div>
          </div>
        </div>
      </Col>

      <Col
        xs={4}
        className="bg-dark "
        style={{ height: "89vh", overflowY: "scroll" }}
      >
        {cart.length !== 0 ? (
          cart.map((element) => (
            <ProductItem product={element} key={element.id} bg="bg-none" />
          ))
        ) : (
          <h4 className="text-white py-2">No hay productos en el carrito</h4>
        )}
        <div className="d-flex justify-content-between text-white">
          <h3>Total</h3>
          <h3>${totalPrice}</h3>
        </div>
      </Col>
      <ModalFinish
        show={isVisible}
        onHide={() => setIsVisible(false)}
        userLogin={userLogin}
      />
    </Row>
  );
};

export default Payment;
