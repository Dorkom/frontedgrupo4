import Col from "react-bootstrap/esm/Col";
import Row from 'react-bootstrap/Row';

const DescQ = (props) => {
    const { imgsrcQ, textQ} = props;
    return (
        <Row xs={1}>
            <Col xs={1}>
                <img src={ imgsrcQ } alt='' height="60px" />
                &nbsp;
            </Col>
            <Col xs={10}>
                <h3>{textQ}</h3>
            </Col>
        </Row>
    )
}

export default DescQ;