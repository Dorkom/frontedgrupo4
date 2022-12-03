import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import StyledDiv from "../Guides/styles";
import DescQ from "./DescQ";
import preguntas from "./preguntas";

const Guides = () => {
  return (
    <Container>
      <Row style={{ height: "5rem", backgroundColor: "transparent" }}></Row>
      <h1>Common questions</h1>
      <br />
      <Container>
        <Container>
          <Container>
            <Container>
              <Container>
                <StyledDiv>
                  <DescQ {...preguntas[0]} />
                </StyledDiv>
                <StyledDiv>
                  <DescQ {...preguntas[1]} />
                </StyledDiv>
                <StyledDiv>
                  <DescQ {...preguntas[2]} />
                </StyledDiv>
                <StyledDiv>
                  <DescQ {...preguntas[3]} />
                </StyledDiv>
                <StyledDiv>
                  <DescQ {...preguntas[4]} />
                </StyledDiv>
                <StyledDiv>
                  <DescQ {...preguntas[5]} />
                </StyledDiv>
                <StyledDiv>
                  <DescQ {...preguntas[6]} />
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
