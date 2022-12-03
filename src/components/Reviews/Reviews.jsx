import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import CardReviews from "./CardReviews";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [data, setData] = useState([]);

  const getComments = async () => {
    try {
      const data = await fetch(`${process.env.REACT_APP_URL_BASE}/api/comment`);
      const dataResponse = await data.json();
      setData(dataResponse.comentarios);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Container>
      <Row xs="auto" className="d-flex justify-content-between mt-4 ">
        <Col>
          <h3>User Reviews</h3>
        </Col>
        <Col>
          <Link
            to="/influencer"
            className="btn btn-primary"
            style={{ "text-decoration": "none", fontSize: "20px" }}
          >
            Influencers
          </Link>
        </Col>
      </Row>
      <Row xs="auto">
        <Col>
          <h4>Global rate</h4>
        </Col>
        <Col>
          <img src="./img/star.png" height="30px" />
        </Col>
        <Col>
          <img src="./img/star.png" height="30px" />
        </Col>
        <Col>
          <img src="./img/star.png" height="30px" />
        </Col>
        <Col>
          <img src="./img/star.png" height="30px" />
        </Col>
        <Col>
          <img src="./img/star.png" height="30px" />
        </Col>
      </Row>
      <Row>
        {data.map((comment) => (
          <CardReviews
            key={comment.id}
            name={comment.nameUser}
            comment={comment.comentario}
            ranking={comment.rate}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
