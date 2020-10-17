import React from "react";
import styled from "styled-components";

const ProjectPage = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(ProjectPage)`
  max-width: 800px;
  margin: auto;
  h2 {
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
`;
