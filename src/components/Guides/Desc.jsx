import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';

const Desc = (props) => {
    const { imgsrc, text} = props;
    return (
        <Row xs={1}>
            <Col xs={1}>
                <img src={ imgsrc } alt='' height="60px" weight="60px" />
            </Col>&nbsp;
            <Col xs={6}>
                <h3>{text}</h3>
            </Col>
        </Row>
    )
}

export default Desc;