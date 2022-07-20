import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams, Link } from "react-router-dom";


export default function SubCategory({ recipes }) {
    let params = useParams();

    return (
        <div>
            <Container className='category'>
                <Row>
                    <Col className='category'>
                        {recipes?.filter(item => item.category === params.category)
                            .map(item => (
                                <Link to={`/categories/${params.category}/${item.id}`} key={item.id}>
                                    <div className="category-card">
                                        <img src={item.image} alt={item.title} />
                                        <h2>{item.title}</h2>
                                    </div>
                                </Link>
                            ))
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}