import "./css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink, Route, Routes } from "react-router-dom";
import useContentful from "./Components/useContentful";
import Dropdown from "./Components/Dropdown";
import React, { useState, useEffect } from "react";
import Recipes from "./Components/Recipes";

function App() {
  // require("regenerator-runtime/runtime");

  // console.log(process.env);
  const [recipes, setRecipes] = useState([]);
  const { getitem } = useContentful();

  const id = 1;
  useEffect(() => {
    getitem().then((response) => {
      console.log(response);
      setRecipes(response);
    });
  }, [id]);

  return (
    <div className="background">
      <header className="headerreact">
        <Header />
      </header>
      <main>
        <Container fluid>
          <Row>
            <Col md={3}>
              <div className="left">
                <Dropdown props={recipes} />
              </div>
            </Col>
            <Col md={9}>
              <div className="box right">
                {/* ----BUG IS HERE; WHEN ever props is called, program crashes ---------*/}
                <Recipes props={recipes} />
                {/* <Routes>
                  <Route
                    path="/recipes/:name"
                    element={<Recipes id={id}></Recipes>}
                  />
                  <Route path="/home/:name" element={<Home></Home>} />
                </Routes> */}
                {/* <Home /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
