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
                <Container >
                    <Row>
                        <Col>
                            <h2 >{element.title}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>{element.shortDescription}</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Ingredients</h2>
                            <ul>
                                {element.ingredients.map((eachIngredient) => {
                                    return <li>{eachIngredient}</li>
                                })}
                            </ul>
                        </Col>
                        <Col>
                            <img style={{width: 600}} src={element.image.fields.file.url} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Description</h2>
                            <p>{element.longDescription}</p>
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