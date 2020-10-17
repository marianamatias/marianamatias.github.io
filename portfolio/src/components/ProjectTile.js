import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TagGroup from "./TagGroup";

const ProjectTile = ({ title, description, tags, className }) => {
  return (
    <div className={className}>
      <img
        src={require(`../assets/images/ProjectTiles/${title}.png`)}
        alt="project"
      />
      <div className="text">
        <Link className="title" to={`/projects/${title}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        {tags && <TagGroup tags={tags} />}
      </div>
    </div>
  );
};

export default styled(ProjectTile)`
  border-radius: 0.15em;
  border: 1px solid;
  box-shadow: 6px 10px;
  transition: all 0.3s;
  max-width: 400px;
  margin: 1rem;

  a {
    font-size: 18px;
    color: black;
    &:visited {
      color: black;
    }
  }

  img {
    border-radius: 0.15em 0.15em 0 0;
    width: 100%;
    height: 170px;
    object-fit: cover;
  }

  .text {
    padding: 10px;

    .title {
      text-decoration: underline;
      h3 {
        margin: 0;
      }
    }
  }

  :hover {
    box-shadow: 10px 15px;
  }
`;
