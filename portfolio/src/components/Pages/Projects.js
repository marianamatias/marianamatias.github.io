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
      .get(`${process.env.REACT_APP_API}/projectTiles/`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      // .get(`http://localhost:5000/api/projectTiles/`)
      .then((res) => res.data)
      .then((response) => {
        setProjects(response.projectTiles);
        console.log(response.projectTiles);
      })
      .catch((err) => {
        toast.error("Unable to load projects");
        console.log(err.message);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    setProjects(fetchProjectTitles().projectTiles);
  }, []);

  return (
    <div className={className}>
      <h1>Projects</h1>
      {loading && (
        <div className="projects-grid">
          {[...Array(3)].map((e, i) => (
            <div className="box" key={i}>
              <Skeleton height={120} />
              <div className="bottom-box">
                <Skeleton width={`40%`} />
                <Skeleton />
                <Skeleton width={`80%`} />
              </div>
            </div>
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
  .box {
    border-radius: 7px;
    border-bottom: solid 1px #f1f1f1;
    border-right: solid 1px #f1f1f1;
    border-left: solid 1px #f1f1f1;

    .bottom-box {
      padding: 1rem;
    }
  }

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
