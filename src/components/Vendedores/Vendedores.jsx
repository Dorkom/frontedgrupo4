import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProductCard from './ProductCard'

const Vendedores = () => {

const data = [{
    title: "Erik Vargas",
    srcimg: "img/er.jpg",
    text: "Assassin's is a long game!!"
},
{
    title: "Jair de la Cruz",
    srcimg: "img/jair.jpeg",
    text: "This is an awesome game!!"
},
{
    title: "Pierina Bustamante",
    srcimg: "img/pier.jpeg",
    text: "This is a hard game!"
},
{
    title: "Jose Alvarez",
    srcimg: "img/jos.jpeg",
    text: "This is an awesome game!!"
},
{
    title: "Miguel Duran",
    srcimg: "img/mig.jpeg",
    text: "This is an awesome game!!"
},
{
    title: "Jonathan Magan",
    srcimg: "img/game02.jpg",
    text: "This is an awesome game!!"
}]

return (
    <Container>
        <Row>
            <Col>
                <h3>VENDEDORES</h3>
            </Col>
        </Row>
        <Row>
            <ProductCard {...data[0]}/>
            <ProductCard title={data[1].title} srcimg={data[1].srcimg} text={data[1].text}/>
            <ProductCard {...data[2]}/>
            <ProductCard {...data[3]}/>
            <ProductCard {...data[4]}/>
            <ProductCard {...data[5]}/>
        </Row>
    </Container>
)
}

export default Vendedores;