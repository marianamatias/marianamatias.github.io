import React from "react";
import Wisteria from "./Wisteria";
import PopLang from "./PopLang";
import PeachPark from "./PeachPark";
import MyCloset from "./MyCloset";
const { Route } = require("react-router-dom");
// import ProjectPage from "../Pages/ProjectPage";

// const routes = <Route path={"/projects/:projectId"} component={Wisteria} />;
const routes = (
  <span>
    <Route path={"/projects/Wisteria"} component={Wisteria} />
    <Route path={"/projects/PopLang"} component={PopLang} />
    <Route path={"/projects/Peach Park"} component={PeachPark} />
    <Route path={"/projects/MyCloset"} component={MyCloset} />
  </span>
);

export default routes;
