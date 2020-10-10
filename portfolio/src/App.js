import React from "react";
import "./App.css";
import { Switch, Route, NavLink, HashRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import About from "./components/Pages/About";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";
import ProjectRoutes from "./components/Projects/ProjectRoutes";
import Menu from "./components/Menu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App({ className, match }) {
  return (
    <div className={className}>
      <ToastContainer />

      <HashRouter>
        <div>
          <Menu className="menu">
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/projects">
              Projects
            </NavLink>
            {/* <NavLink to="/resume">Resume</NavLink> */}
          </Menu>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            {/* <Route path={match.url + "/:id"} /> */}
            {ProjectRoutes}
            <Route exact path="/resume" component={Resume} />
            <Route path="*" component={ErrorPage} status={404} />
          </Switch>
        </div>
      </HashRouter>
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
    background: #fdd734;
  }

  @media screen and (max-width: 992px) {
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    max-width: 400px;
  }
`;
