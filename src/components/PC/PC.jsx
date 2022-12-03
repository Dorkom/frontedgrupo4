import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate, useParams } from "react-router-dom";
import CartContext from "../../context/CartProvider";

const PC = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { addItem, cart, setCart } = useContext(CartContext);
  const [infoArmado, setInfoArmado] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const getArmadoById = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_URL_BASE}/api/armado/${id}`
    );
    const data = await response.json();
    setInfoArmado(data.armadoDetail);
    const sumPrecio = data.armadoDetail.reduce((acc, item) => {
      acc += item.price;
      return acc;
    }, 0);
    setTotalPrice(sumPrecio);
  };

  const handleClick = () => {
    infoArmado.forEach((item) => {
      setCart((e) => [...e, item]);
    });

    navigate("/checkout");
  };

  useEffect(() => {
    getArmadoById(params.id);
  }, []);
  console.log("%c cart :", "background-color:#048A81", cart);
  return (
    <div className="d-flex mt-4">
      <div className="w-50">
        <h3>Your Optimized Build!</h3>
        <img src="/img/pcgamer.png" alt="" style={{ width: "300px" }} />
        <div className="d-flex justify-content-center  gap-4 p-2 rounded-2 bg-dark text-white w-50">
          <div>
            <p>Components price</p>
            <p>${totalPrice}</p>
          </div>
          <div>
            <p>Build fee</p>
            <p>$99</p>
          </div>
        </div>
      </div>
      <div
        className="w-50 d-flex flex-column gap-2 "
        style={{ overflowY: "scroll" }}
      >
        <div>
          <h3>Componentes</h3>
          <Button onClick={handleClick} className="btn -btn-primary">
            Ir al Carrito
          </Button>
        </div>
        <div className="d-flex flex-wrap">
          {infoArmado &&
            infoArmado.map((componente) => (
              <div
                key={componente.id}
                className={`w-50 d-flex my-1 align-items-center justify-content-around bg-white py-2 rounded-2`}
              >
                <img
                  src={componente.url}
                  alt=""
                  style={{ width: "70px", height: "60px", paddingLeft: "20px" }}
                />
                <div className=" w-100 d-flex justify-content-evenly text-left  px-3 rounded-2">
                  <p>
                    {" "}
                    <b>{componente.name}</b>{" "}
                  </p>

                  <p>${componente.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PC;
