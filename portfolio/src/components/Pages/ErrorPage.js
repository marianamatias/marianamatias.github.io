import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const ErrorPage = ({ className }) => {
  const history = useHistory();

  return (
    <div className={className}>
      <h1>Ceci n'est pas une page 404</h1>
      <Button onClick={() => history.push("/")}>Go back to Home</Button>
    </div>
  );
};

export default styled(ErrorPage)`
  h1 {
    font-family: "Dawning of a New Day", cursive;
    font-size: 5rem;
    text-shadow: 2px 2px 5px #ccc;
    margin: 0rem;
    font-weight: 800;
    margin-bottom: 3rem;
  }
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
