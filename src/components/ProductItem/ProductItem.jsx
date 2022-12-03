import React from "react";

const ProductItem = ({
  product,
  handleAdd,
  button = false,
  bg = "bg-secondary",
}) => {
  return (
    <div className="w-100 d-flex flex-wrap mb-2 ">
      <div
        className={`w-100 d-flex  align-items-center justify-content-around ${bg} py-2 rounded-2`}
      >
        <img
          src={product.url}
          alt=""
          style={{ width: "60px", height: "60px" }}
        />
        <div className="d-flex flex-column text-white text-left  px-3 rounded-2">
          <p>
            {" "}
            <b>{product.name}</b>{" "}
          </p>
          <div className="d-flex gap-4 flex-wrap">
            <p style={{ width: "240px" }}>{product.description}</p>
            <p>${product.price}</p>
          </div>
        </div>
        {button && (
          <button
            className="btn btn-primary "
            onClick={() => {
              handleAdd(product);
            }}
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
