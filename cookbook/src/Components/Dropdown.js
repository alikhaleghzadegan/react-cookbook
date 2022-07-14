import React from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ props }) => {
  console.log(props.item[0].title);

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
            {props.item.map((e, index) => (
              <li key={index} className="li">
                {/* <NavLink */}
                {/* to={"/one/" + e.id.value}
              // style={({ isActive }) => (isActive ? activeStyle : undefined)}
            > */}
                {e.title}
                {/* </NavLink> */}
              </li>
            ))}
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
