import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Alert from "./Alert";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import ProductCard from './ProductCard'

const Home = () => {
  // const data = [{
  //     title: "Assassin's Creed",
  //     srcimg: "img/game01.JPG",
  //     text: "Assassin's is a long game!!"
  // },
  // {
  //     title: "Mario Galaxy",
  //     srcimg: "img/game02.jpg",
  //     text: "This is an awesome game!!"
  // },
  // {
  //     title: "Elden Ring",
  //     srcimg: "img/game03.jpg",
  //     text: "This is a hard game!"
  // }]

  return (
    <Container>
      <Row xs="auto">
        <Col>
          {" "}
          <h1
            className=" text-white mt-4"
            style={{ fontSize: "80px", fontWeight: "bold" }}
          >
            Build Your Pc!
          </h1>
        </Col>
      </Row>
      <Row xs="auto">
        <Col>
          <h3
            className="text-white"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          >
            Just for what you need
          </h3>
        </Col>
      </Row>
      <Row xs="auto mt-4">
        <Button variant="primary" href="typeuse">
          Build for begginers
        </Button>{" "}
        <Link to="/build">
          <Button variant="secondary" style={{ marginLeft: "40px" }}>
            Advanced building
          </Button>{" "}
        </Link>
      </Row>
      {/* <Row>
            <ProductCard {...data[0]}/>
            <ProductCard title={data[1].title} srcimg={data[1].srcimg} text={data[1].text}/>
            <ProductCard {...data[2]}/>
        </Row> */}
    </Container>
  );
};

export default Home;
