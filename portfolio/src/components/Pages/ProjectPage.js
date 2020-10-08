import React from "react";
import styled from "styled-components";

const ProjectPage = ({ className, match }) => {
  return (
    <div className={className}>
      <h1>{match.params.projectId}</h1>
      <h3>Organization</h3>
      <p>Short description</p>

      {/* Situation, what is the problem? */}
      <h1>Challenge</h1>

      {/* Personal goals */}
      <h1>Opportunity</h1>

      {/* Personal growth */}
      <h1>Value Delivered</h1>

      {/* Final product */}
      <h1>Outcome</h1>

      {/* Personal growth */}
      <h1>Lessons Learned</h1>
    </div>
  );
};

export default styled(ProjectPage)``;
