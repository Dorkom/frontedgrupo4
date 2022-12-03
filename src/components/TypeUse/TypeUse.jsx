import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import buttonicon from './buttonicon';
import Types from './Types'


const TypeUse = () => {

    return (
        <Container>
            <Row>
                <Col>
                <h2>
                    What do you need?
                </h2>
                </Col>
            </Row><br/>
            <Row>
                <Types {...buttonicon[0]} />
                <Types {...buttonicon[1]} />
                <Types {...buttonicon[2]} />
            </Row><br/>
            <Row>
                <Types {...buttonicon[3]} />
                <Types {...buttonicon[4]} />
                <Types {...buttonicon[5]} />
            </Row>
        </Container>
    )
}

export default TypeUse;