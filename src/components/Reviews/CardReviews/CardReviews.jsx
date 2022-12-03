import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { FaStar } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const CardReviews = (props) => {
  const { name, comment, ranking } = props;
  return (
    <Row>
      <Card class="border-top bg-white">
        <div className="d-flex flex-column justify-content-center  gap-2 p-2">
          <div className="d-flex align-items-center gap-4">
            <Card.Title>{name}</Card.Title>
            <div className="d-flex">
              {[...new Array(5)].map((star, index) => {
                return index < ranking ? (
                  <FaStar
                    icon="fa-solid fa-star"
                    className="bg-white"
                    style={{ cursor: "pointer" }}
                    key={index}
                  />
                ) : (
                  <FiStar
                    icon="fa-regular fa-star"
                    key={index}
                    style={{ cursor: "pointer" }}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <Card.Text>{comment}</Card.Text>
          </div>
        </div>
      </Card>
    </Row>
  );
};

export default CardReviews;
