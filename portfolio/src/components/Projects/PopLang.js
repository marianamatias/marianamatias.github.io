import React from "react";
import styled from "styled-components";
import ProjectPage from "../Pages/ProjectPage";
import ProjectHeader from "./ProjectHeader";

const PopLang = ({ className, match }) => {
  return (
    <ProjectPage>
      <div className={className}>
        <ProjectHeader
          title="PopLang"
          //   title={match.params.projectId}
          location="Educational Technology"
          dates="Sep 2019 - Dec 2019"
          repo={"https://github.com/TonyKimisintheHouse/TransLang"}
          toolTags={[
            {
              text: "React",
              type: "tech",
            },
            {
              text: "Figma",
              type: "tech",
            },
          ]}
          conceptTags={[
            {
              text: "Learner-centered design",
              type: "concept",
            },
            {
              text: "User Research",
              type: "concept",
            },
            {
              text: "Literature Review",
              type: "concept",
            },
          ]}
        />

      </div>
    </ProjectPage>
  );
};

export default styled(PopLang)``;
