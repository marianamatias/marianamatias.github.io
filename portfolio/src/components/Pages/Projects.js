import React from "react";
import styled from "styled-components";
import ProjectTile from "../ProjectTile";

const Projects = ({ className }) => {
  return (
    <div className={className}>
      <h1>Projects</h1>
      <div className="projects-grid">
        <ProjectTile
          title="PopLang"
          description="A web app to break language barrier to learn programming"
          imageSource={require("../../images/wisteria.png")}
          tags={["Educational Technology", "React"]}
        />
        <ProjectTile
          title="Wisteria"
          description="Building an app for professional networking"
          imageSource={require("../../images/wisteria.png")}
          tags={["Mobile", "Flutter", "Capstone"]}
        />
        <ProjectTile
          title="Peach Park"
          description="Prototype to improve the Atlanta parking experience"
          imageSource={require("../../images/wisteria.png")}
          tags={["UX Research", "Design thinking"]}
        />
        <ProjectTile
          title="Computer Science + Social Good"
          description="Days of Code at local Atlanta elementary schools"
          imageSource={require("../../images/wisteria.png")}
          tags={["CS Education", "Project Manager"]}
        />
        <ProjectTile
          title="Econet"
          description="An app to create and maintain eco-friendly habbits"
          imageSource={require("../../images/wisteria.png")}
          tags={["Android", "Entrepreneurship"]}
        />
      </div>
    </div>
  );
};

export default styled(Projects)`
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 3rem;
  }

  @media screen and (max-width: 992px) {
    .projects-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
