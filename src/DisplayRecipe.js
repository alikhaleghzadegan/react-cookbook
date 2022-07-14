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
                        <Col>
                            <h2 className="recipe-ing-title">Ingredients</h2>
                                {element.ingredients.map((eachIngredient) => {
                                    return <p className="recipe-ing-list-item">{eachIngredient}</p>
                                })}
                        </Col>
                        <Col>
                            <img style={{width: 600}} src={element.image.fields.file.url} />
                        </Col>
                    </Row>
                    <Row className='recipe-long-des-row'>
                        <Col>
                            <h2 className="recipe-long-des-title">Description</h2>
                            <p className="recipe-long-des">{element.longDescription}</p>
                        </Col>
                    </Row>

                    {/* <div key={element.id}>
                        <h2 >{element.title}</h2>
                        <h3>{element.shortDescription}</h3>
                        <h2>Ingredients</h2>
                        <ul>
                            {element.ingredients.map((eachIngredient) => {
                                return <li>{eachIngredient}</li>
                            })}
                        </ul>
                        <img src={element.image.fields.file.url} />
                        <h2>Description</h2>
                        <p>{element.longDescription}</p>
                    </div> */}
                </Container >
                
            )
        }})
}

export default DisplayRecipe