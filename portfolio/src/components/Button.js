import React from "react";
import styled from "styled-components";

const Button = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default styled(Button)`
  display: inline-block;
  padding: 1rem 2rem;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.15em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 800;
  color: #ffffff;
  background-color: #04c4de;
  box-shadow: inset 0 -0.8em 0 -0.35em rgba(0, 0, 0, 0.17);
  text-align: center;
  position: relative;
  border: none;

  :active {
     top: 0.2em;
     box-shadow: inset 0 -0.6em 0 -0.35em rgba(0, 0, 0, 0.17);
  }
`;
