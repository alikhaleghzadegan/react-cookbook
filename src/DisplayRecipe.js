import { useParams } from "react-router-dom";

const DisplayRecipe = ({ recipes }) => {

    let {recipeId} = useParams();

    console.log(recipes);

    return recipes.map((element) => {
       
        if (element.id == recipeId) {
            
            return (
                <div key={element.id}>
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
                </div>
            )
        }})
}

export default DisplayRecipe