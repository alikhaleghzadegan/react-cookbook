import React from "react";
import "../css/style.css";
// import logo from "../image/headerfooter/saffronpurple.png";
const Header = () => {
  return (
    <div>
      {/* <img className="logomain" src={logo} alt={"Logo"}></img> */}
      <nav>
        <ul className="menu">
          <li>HOME</li>
          <li>KITCHEN</li>
          <li>VIDEOS</li>
          <li>RECIPES MAGAZINE</li>
          <li>CONTACT</li>
          <input type="text" placeholder="Find a recipe.."></input>
          {/* <img src={"../image/headerfooter/searchbar.png"} alt=""></img> */}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
