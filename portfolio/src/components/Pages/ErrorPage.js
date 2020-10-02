import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const ErrorPage = ({ className }) => {
  const history = useHistory();

  return (
    <div className={className}>
      <h1>This page does not exist :(</h1>
      <Button onClick={() => history.push("/")}>Go back to Home</Button>
    </div>
  );
};

export default styled(ErrorPage)`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
