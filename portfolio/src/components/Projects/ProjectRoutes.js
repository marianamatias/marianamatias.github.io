import React from "react";
import Wisteria from "./Wisteria";
import PopLang from "./PopLang";
import PeachPark from "./PeachPark";
import MyCloset from "./MyCloset";
const { Route } = require("react-router-dom");
// import ProjectPage from "../Pages/ProjectPage";
// const routes = <Route path={"/projects/:projectId"} component={Wisteria} />;

export default [
  <Route exact path="/projects/Wisteria" component={Wisteria} />,
  <Route exact path="/projects/PopLang" component={PopLang} />,
  <Route exact path="/projects/Peach Park" component={PeachPark} />,
  <Route exact path="/projects/MyCloset" component={MyCloset} />,
];
