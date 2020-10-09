import React from "react";
import styled from "styled-components";

const BoxShadow = ({ className, children }) => {
  return <span className={className}>{children}</span>;
};

export default styled(BoxShadow)`
  padding: 0;
  box-shadow: 6px 10px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 10px 15px;
  }
`;
