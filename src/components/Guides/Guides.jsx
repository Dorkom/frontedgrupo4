import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StyledDiv from "./styles";
import Desc from "./Desc";
import texto from "./texto";

const Guides = () => {
  return (
    <Container>
      <Row style={{ height: "5rem", backgroundColor: "transparent" }}></Row>
      <h1>Guides</h1>
      <br />
      <Container>
        <Container>
          <Container>
            <Container>
              <Container>
                <StyledDiv>
                  <Desc {...texto[0]} />
                </StyledDiv>
                <StyledDiv>
                  <Desc {...texto[1]} />
                </StyledDiv>
                <StyledDiv>
                  <Desc {...texto[2]} />
                </StyledDiv>
                <StyledDiv>
                  <Desc {...texto[3]} />
                </StyledDiv>
                <StyledDiv>
                  <Desc {...texto[4]} />
                </StyledDiv>
              </Container>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Guides;
