import React from "react";
import styled from "styled-components";

const ProjectPage = ({ className, match }) => {
  return (
    <div className={className}>
      <h1>{match.params.projectId}</h1>
      <p></p>
    </div>
  );
};

export default styled(ProjectPage)``;
