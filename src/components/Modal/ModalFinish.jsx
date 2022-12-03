import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import CartContext from "../../context/CartProvider";
import StarRanking from "../rankingStar/StarRanking";

const ModalFinish = (props) => {
  const navigate = useNavigate();
  const { setCart } = useContext(CartContext);

  const [ranking, setRanking] = useState(0);
  const [comment, setComment] = useState("");

  const handleClick = () => {
    postComentario();
    props.onHide();
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/");
  };

  const postComentario = async () => {
    const dataSend = {
      usuarioId: props.userLogin,
      comentario: comment,
      rate: ranking,
    };
    try {
      const data = await fetch(
        `${process.env.REACT_APP_URL_BASE}/api/comment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dataSend),
        }
      );

      const dataResp = await data.json();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="d-flex flex-column align-items-center">
        <h4>Thank You For You Order!</h4>
        <FiCheckCircle style={{ fontSize: "50px", margin: "20px 0" }} />
        <StarRanking ranking={ranking} setRanking={setRanking} />
        <p>Leave a comment</p>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClick}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFinish;
