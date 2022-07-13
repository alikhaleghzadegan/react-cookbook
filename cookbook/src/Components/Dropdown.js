import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ props }) => {
  console.log(props);

  //   let navigate = useNavigate();
  //   const [selectval, setSelectval] = useState('');
  //   const handleChange = (e) => {
  //     selectval = e.target.value;
  //     setSelectval(e.target.value);
  //     // navigate(`${selectval}`);
  //     return selectval;
  //   };

  return (
    <>
      <div>
        <h1>Drink Menu</h1>
        <div>
          <ul className="container-dropdown">
            <li className="li">Tropical Fruit Smoothie</li>
            <li className="li">Frozen Cinnamon Chocolate Milkshake</li>
            <li className="li">Jedi Mind Trick Cocktail</li>
            <li className="li">Last Word Cocktail</li>
            {/* {props.map((e, index) => {
              <li key={index}>{e.title}</li>;
            })} */}
          </ul>
        </div>
      </div>
      {/* <h1>You chose {selectval}</h1> */}
    </>
  );
};

export default Dropdown;
{
  /* <select onChange={(e) => handleChange(e)}> */
}
{
  /* <option value="Main Dish">Main Dish</option> */
}
{
  /* <option key={0} value="pang">
              PanGalactic Gargle Blaster
            </option>
            <option key={1} value="rice">
              rice
            </option> */
}
{
  /* <option value="Rice">Rice</option> */
}
{
  /* </select> */
}
