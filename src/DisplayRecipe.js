import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useParams } from "react-router-dom";

const DisplayRecipe = ({ recipes }) => {

    let {recipeId} = useParams();

    console.log(recipes);

    return recipes.map((element) => {
       
        if (element.id == recipeId) {
            
            return (
                <Container className='recipe-container' >
                    <Row className='recipe-title-row'>
                        <Col>
                            <h2 className="recipe-title" >{element.title}</h2>
                        </Col>
                    </Row>
                    <Row className='recipe-short-des-row'>
                        <Col>
                            <h3 className="recipe-short-des">{element.shortDescription}</h3>
                        </Col>
                    </Row>
                    <Row className='recipe-ing-img-row'>
                        <Col className='green_bg'>
                            <h2 className="recipe-ing-title">Ingredients</h2>
                                {element.ingredients.map((eachIngredient) => {
                                    return <p className="recipe-ing-list-item">{eachIngredient}</p>
                                })}
                        </Col>
                        <Col >
                            <Row>
                                <Col className='green_bg image-col'>
                                    <img className="recipe-image" src={element.image.fields.file.url} />
                                </Col>
                            </Row>
                            
                        </Col>
                    </Row>
                    <Row className='recipe-long-des-row'>
                        <Col className='green_bg'>
                            <h2 className="recipe-long-des-title">Description</h2>
                            <p className="recipe-long-des">{element.longDescription}</p>
                        </Col>
                    </Row>
                </Container >
                
            )
        }})
}

export default DisplayRecipe