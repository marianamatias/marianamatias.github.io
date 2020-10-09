import React from "react";
import styled from "styled-components";

const ProjectPage = ({ className, children }) => {
  return (
    <div className={className}>
      {children} <h3 class="signature">-Mariana Matias</h3>
    </div>
  );
};

export default styled(ProjectPage)`
  max-width: 800px;
  margin: auto;
  h2 {
    font-size: 2rem;
  }
  .signature {
    font-family: "Dawning of a New Day", cursive;
    font-size: 2rem;
    text-shadow: 1px 1px 3px #ccc;
  }
`;
