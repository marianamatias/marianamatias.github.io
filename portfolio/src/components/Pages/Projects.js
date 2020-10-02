import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProjectTile from "../ProjectTile";
import axios from "axios";
import { toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";

const Projects = ({ className, match }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjectTitles = async () => {
    axios
      .get(`${process.env.REACT_APP_API}/projectTiles/`)
      .then((res) => res.data)
      .then((response) => {
        setProjects(response);
      })
      .catch((err) => {
        toast.error("Unable to load projects");
        console.log(err.message);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    fetchProjectTitles();
  }, []);

  return (
    <div className={className}>
      <h1>Projects</h1>
      {loading && (
        <div className="projects-grid">
          {[...Array(3)].map((e, i) => (
            <span key={i}>
              <Skeleton height={120} />
              <div>
                <Skeleton height={30} width={`40%`} />
              </div>
              <Skeleton />
              <Skeleton width={`80%`} />
            </span>
          ))}
        </div>
      )}
      <div className="projects-grid">
        {projects &&
          projects.map((e) => (
            <ProjectTile
              key={e.id}
              title={e.title}
              description={e.description}
              tags={e.tags}
            />
          ))}
      </div>
    </div>
  );
};

export default styled(Projects)`
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
    row-gap: 2rem;
  }

  @media screen and (max-width: 992px) {
    .projects-grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
