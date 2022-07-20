import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


export default function Categories({ categories }) {

    return (
        <div>
            <Container className='categories'>
                <Row>
                    <Col>
                        {categories?.map(item => (
                            <Link to={`/categories/${item.name}`} key={item.id}>
                                <div className="category-card">
                                    <img src={item.image} alt={item.title} />
                                    <h2>{item.title}</h2>
                                </div>
                            </Link>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
