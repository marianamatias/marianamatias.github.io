import React from "react";
import styled from "styled-components";
import TagGroup from "../TagGroup";

const ProjectHeader = ({
  className,
  title,
  location,
  dates,
  repo,
  video,
  design,
  toolTags,
  conceptTags,
}) => {
  return (
    <div className={className}>
      <div className="info">
        <h1>{title}</h1>
        <p>
          {location}
          <br />
          {dates}
        </p>
      </div>{" "}
      <div className="tools">
        {toolTags && (
          <div className="flex">
            <strong>Tools</strong>:
            <TagGroup tags={toolTags} />
          </div>
        )}
        {conceptTags && (
          <div className="flex">
            <strong>Concepts</strong>:
            <TagGroup tags={conceptTags} />
          </div>
        )}
        {repo && (
          <span>
            Check out the{" "}
            <a href={repo}>
              <strong>
                <mark>GitHub repo.</mark>
              </strong>
            </a>{" "}
          </span>
        )}
        {video && (
          <span>
            Watch the{" "}
            <strong>
              <a href={video}>
                <mark>video.</mark>
              </a>{" "}
            </strong>
          </span>
        )}
        {design && (
          <span>
            Explore the{" "}
            <strong>
              <a href={design}>
                <mark>design.</mark>
              </a>{" "}
            </strong>
          </span>
        )}
      </div>
    </div>
  );
};

export default styled(ProjectHeader)`
  .info {
    text-align: center;
    h1 {
      font-size: 3rem;
      margin-bottom: 0;
    }
    p {
      margin-top: 0.5rem;
      font-size: 11pt;
    }
  }

  .tools {
    font-family: karla;
  }

  .flex {
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
    font-family: "Karla", serif;
  }

  @media screen and (max-width: 600px) {
    .flex {
      display: inline;
    }
    .tools {
      * {
        margin-bottom: 0.5rem;
      }
    }
  }
`;
