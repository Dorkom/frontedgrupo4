import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Ranking = () => {

return (
    <div>

<Container  style={{background:"white"}}>
        <Row  xs="auto">
            <Col>
            <h3>
                Ranking best sellers periferics
            </h3>
            </Col>
        </Row>

        <Row>
            <Col>
                <img src="audifonos.jpg" height="100px"/>
            </Col>
            <Col>HeadSet</Col>
            <Col>$25</Col>
           
        </Row>
        <Row>
            <Col>
                <img src="teclado.jpg" height="100px"/>
            </Col>
            <Col>Mouse and Keyboards</Col>
            <Col>$39</Col>
            
        </Row>
        <Row>
            <Col>
                <img src="mousepad.jpg" height="100px"/>
            </Col>
            <Col>Standar mouse pad</Col>
            <Col>$19</Col>
            
        </Row>
        <Row>
            <Col>
                <img src="mousepad2.jpg" height="100px"/>
            </Col>
            <Col>XL mouse pad</Col>
            <Col>$29</Col>
            
        </Row>
        
    </Container>


    </div>
)
}

export default Ranking;