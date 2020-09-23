import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Tag from "./Tag";

const ProjectTile = ({ title, description, imageSource, tags, className }) => {
  return (
    <div className={className}>
      <img src={imageSource} alt="project" />
      <div className="text">
        <Link className="title" to="/wisteria">
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className="tags">
          {tags && tags.map((tagText) => <Tag>{tagText}</Tag>)}
        </div>
      </div>
    </div>
  );
};

export default styled(ProjectTile)`
  border: 1px solid;
  box-shadow: 6px 10px;
  transition: all 0.3s;
  max-width: 400px;
  margin: 1rem;
  
  a {
    &:visited {
      color: black;
    }
  }

  img {
    width: 100%;
  }

  .text {
    padding: 10px;
    background: white;
    .title {
        text-decoration: underline;
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
  }

  :hover {
    box-shadow: 10px 15px;
  }
`;
