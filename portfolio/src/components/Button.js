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
  padding: 1rem 2rem;
  border: 1px solid;
  box-shadow: 4px 7px;
  transition: all 0.3s;
  :hover {
    box-shadow: 6px 9px;
  }
  font-weight: 600;
  background-color: #04c4de;
  cursor: pointer;
`;
