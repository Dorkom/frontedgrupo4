import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import buttonicon from "../TypeUse/buttonicon";
import Types from "../TypeUse/Types";
import { useHref } from "react-router-dom";

const Support = () => {
  return (
    <Container>
      <div style={{ height: "5rem", backgroundColor: "transparent" }}></div>
      <Row>
        <Col>
          <h1>Support Hub</h1>
        </Col>
      </Row>
      <div style={{ height: "5rem", backgroundColor: "transparent" }}></div>
      <Row>
        <Types {...buttonicon[6]} />
        <Types {...buttonicon[7]} />
        <Types {...buttonicon[8]} />
      </Row>
      <br />
    </Container>
  );
};
export default Support;
