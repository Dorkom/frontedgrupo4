import Card from "react-bootstrap/Card";
import BsButton from "react-bootstrap/Button";
import styled from "styled-components";

const StyledButton = styled(BsButton)`
  background-color: gray;
  --bs-btn-border-color: none;
`;
const SyledText = styled(Card.Text)`
  text-align: center;
`;

const Types = (props) => {
  const { href, imgsrc, text } = props;

  return (
    <Card style={{ width: "22rem", height: "15rem", "margin-left": "4rem" }}>
      <StyledButton
        variant="secondary"
        href={href}
        style={{ width: "20rem", height: "15rem" }}
      >
        <img src={imgsrc} alt="" height="205px" />
      </StyledButton>
      <SyledText>{text}</SyledText>
    </Card>
  );
};

export default Types;
