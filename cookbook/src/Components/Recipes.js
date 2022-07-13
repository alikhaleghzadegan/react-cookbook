import React from "react";

const Recipes = ({ props, id }) => {
  //Problem: crahes
  // const obj = recipes.recipe[id].ingredients;
  console.log(props);

  return (
    <div>
      {/* <h2> {props.recipe[id].title}</h2>
      <h3> {props.recipe[id].subtitle}</h3> */}
      <br></br>
      <h3>Intro</h3>
      {/* <p>{props.item[id].intro}</p>
      <h3>Description</h3>
      <p>{props.item[id].description}</p>
      <img className="image" src={props.item[id].url} alt="" />
      {/* <ol>
        {obj.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ol> */}
    </div>
  );
};

export default Recipes;
