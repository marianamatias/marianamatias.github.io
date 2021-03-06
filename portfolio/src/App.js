import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "./components/Pages/Home";
import ErrorPage from "./components/Pages/ErrorPage";
import About from "./components/Pages/About";
import Projects from "./components/Pages/Projects";
import ProjectRoutes from "./components/Projects/ProjectRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuWrapper from "./components/MenuWrapper";

function App({ className, match }) {
  return (
    <div className={className}>
      <ToastContainer />
      <BrowserRouter>
        <MenuWrapper>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              {ProjectRoutes}
              <Route path="" component={ErrorPage} />
            </Switch>
          </div>
        </MenuWrapper>
      </BrowserRouter>
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
