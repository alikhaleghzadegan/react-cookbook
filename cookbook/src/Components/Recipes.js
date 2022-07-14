import React from "react";

const Recipes = ({ props }) => {
  //Problem: crahes
  // const obj = recipes.recipe[id].ingredients;
  console.log(props);

  return (
    <div>
      <h2> {props.item[0].title}</h2>
      <h3> {props.item[0].subtitle}</h3>
      <br></br>
      <h3>Intro</h3>
      <p>{props.item[0].intro}</p>
      <h3>Description</h3>
      <p>{props.item[0].description}</p>
      <img className="image" src={props.item[0].url} alt="" />
      {/* <ol>
        {props.item.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ol> */}
    </div>
  );
};

export default Recipes;
