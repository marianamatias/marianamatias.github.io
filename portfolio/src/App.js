import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";
import ProjectRoutes from "./components/Projects/ProjectRoutes";
import Menu from "./components/Menu";

function App({ className }) {
  return (
    <div className={className}>
      <Router>
        <div>
          {/* TODO: Style menu */}
          <Menu className="menu">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
            {/* <NavLink to="/about">About</NavLink> */}
            <NavLink exact to="/projects">
              Projects
            </NavLink>
            {/* <NavLink to="/resume">Resume</NavLink> */}
          </Menu>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          {/* TODO: replace with components */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
            {ProjectRoutes}
            <Route component={ErrorPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default styled(App)`
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  padding: 3em;

  *::selection {
    background: #EDAA35;
  }

  @media screen and (max-width: 992px) {
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    max-width: 400px;
  }
`;
