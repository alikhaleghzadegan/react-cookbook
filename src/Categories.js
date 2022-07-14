import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


export default function Categories({ categories }) {

    console.log(categories);

    return (

        <Container className='categories'>
            <Row>
                        <Col><div className='margin-fixer'></div> {/* This div is placed here to add a space between navbar and followed content. Looking for a proper fix */}
                        </Col> 
                    </Row>
            <Row>
                <Col>
                    {categories?.map(item => (
                        <Link to={"/" + item.name}>
                            <div key={item.id} className="category-card">

                                <img src={item.image} alt={item.title} />
                                <h2>{item.title}</h2>
                            </div>
                        </Link>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

