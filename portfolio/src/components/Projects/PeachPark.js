import React from "react";
import styled from "styled-components";
import ProjectPage from "../Pages/ProjectPage";
import ProjectHeader from "./ProjectHeader";

const PeachPark = ({ className, match }) => {
  return (
    <ProjectPage>
      <div className={className}>
        <ProjectHeader
          title="PeachPark"
          //   title={match.params.projectId}
          location="User Interface Design"
          dates="Sep 2018 - Dec 2018"
          conceptTags={[
            {
              text: "UX Research",
              type: "concept",
            },
            {
              text: "Design Thinking",
              type: "concept",
            },
            {
              text: "Principles of Interaction Design",
              type: "concept",
            },
          ]}
        />
        <h2>Description</h2>
        <p>A design prototype to improve the Atlanta parking experience</p>
      </div>
    </ProjectPage>
  );
};

export default styled(PeachPark)``;
