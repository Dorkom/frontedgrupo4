import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BsButton from "react-bootstrap/Button";
import styled from "styled-components";

const About = () => {
  const StyledButton = styled(BsButton)`
    color: white;
    font-weight: bold;
    background-color: fuchsia;
    --bs-btn-border-color: none;
  `;
  return (
    <Container>
      <Row style={{ height: "5rem", backgroundColor: "transparent" }}></Row>
      <h1>Conoce más</h1>
      <br />
      <Row
        style={{
          height: "12rem",
          backgroundColor: "white",
          color: "black",
          textAlign: "center",
        }}
      >
        <h1>CHECKOUT OUR LASTEST BUILD AND MAKE IT YOUR OWN!</h1>
      </Row>
      <Row
        style={{
          height: "15rem",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <Col>
          <img src="./img/01.png" alt="" height="450px" padding-left="2rem" />
        </Col>
        <Col>
          <h1>&nbsp;</h1>
          <h1>&nbsp;</h1>
          <h3 text-aling="center">
            OUR MISSION IS TO BUILD GAMING PCS AT THE BEST PRICE WITHOUT CUTTING
            CORNERS.
          </h3>
        </Col>
      </Row>
      <Row xs={1} style={{ height: "14rem", backgroundColor: "black" }}>
        <Col xs={6}></Col>
        <Col xs={2}>
          <h4>&nbsp;</h4>
          <StyledButton href="/">Lest Build!</StyledButton>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
