import React from "react";
import styled from "styled-components";
import ProjectPage from "../Pages/ProjectPage";
import ProjectHeader from "./ProjectHeader";

const MyCloset = ({ className, match }) => {
  return (
    <ProjectPage>
      <div className={className}>
        <ProjectHeader
          title="MyCloset"
          //   title={match.params.projectId}
          location="Capstone Design"
          dates="Aug 2019 - Dec 2019"
          toolTags={[
            {
              text: "AdobeXD",
              type: "tech",
            },
          ]}
          conceptTags={[
            {
              text: "User Research",
              type: "concept",
            },
            {
              text: "Client Project",
              type: "concept",
            },
          ]}
        />

        <h2>Description</h2>
        <p>
          MyCloset aims to eliminate this barrier by offering an app that
          automatically scans users’ e-receipts and populates their virtual
          wardrobes. This app will target teenagers and millennials, allowing
          them to add, view, and edit items in their wardrobe and create virtual
          outfits from the items they own.
        </p>

        <h2>Future Direction</h2>
        <p>
          Future directions for the app include social networking and the
          ability to create collections of outfits, as well as artificial
          intelligence outfit recommendations based on local style, weather,
          personal style, and preferred brands.
        </p>
      </div>
    </ProjectPage>
  );
};

export default styled(MyCloset)``;
