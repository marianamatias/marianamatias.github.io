import React from "react";
import styled from "styled-components";
import TagGroup from "../TagGroup";

const ProjectHeader = ({
  className,
  title,
  location,
  dates,
  repo,
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
      <p className="tools">
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
            <strong>GitHub Repository</strong>:{" "}
            <a href={repo}>
              <mark>{repo}</mark>
            </a>{" "}
          </span>
        )}
      </p>
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

  .flex {
    padding-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
`;
