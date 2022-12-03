import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../../context/CartProvider";

const ProductInfo = () => {
  const params = useParams();

  const [product, setProduct] = useState("");
  const { addItem } = useContext(CartContext);

  const handleAddProduct = (e) => {
    e.preventDefault();
    addItem(product);
  };

  const getProductById = async () => {
    try {
      const resp = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/productoById/${params.id}`
      );
      const respData = await resp.json();
      setProduct(respData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductById();
  }, [params]);

  return (
    <div
      className="d-flex justify-content-evenly align-items-center "
      style={{ height: "500px" }}
    >
      <div
        className="d-flex flex-column justify-content-evenly p-4 bg-white rounded-3 "
        style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)", height: "300px" }}
      >
        <img src={product.url} alt="" style={{ width: "200px" }} />
        <button className="btn btn-primary" onClick={handleAddProduct}>
          Add to cart
        </button>
      </div>
      <div className=" text-white bg-primary p-4 rounded-3">
        <h3 style={{ fontSize: "45px", fontWeight: "900" }}>{product.name}</h3>
        <div style={{ fontSize: "22px", fontWeight: "700" }}>
          ${product.price}
        </div>
        <div style={{ fontWeight: "700" }}>{product.description}</div>
      </div>
    </div>
  );
};

export default ProductInfo;
