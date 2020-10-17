import React from "react";
import styled from "styled-components";
import SocialLinks from "../SocialLinks";
import Button from "../Button";
import { Link } from "react-router-dom";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <span className="social-links">
        <SocialLinks />
      </span>
      <div className="info">
        <h1>Mariana Matias</h1>
        <p>Front End Developer & UX Designer</p>
        <p>Computer Science @ Georgia Tech</p>
        <div className="buttons">
          <Link to="/projects">
            <Button>Projects</Button>
          </Link>
          <Link to="/about">
            <Button>About Me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default styled(Home)`
  .social-links {
    position: absolute;
    right: 0;
    top: 50%;
    z-index: 99;
  }

  .info {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1 {
      font-family: "Dawning of a New Day", cursive;
      font-size: 8rem;
      text-shadow: 2px 2px 5px #ccc;
      margin: 0rem;
      font-weight: 800;
    }

    p {
      line-height: 1rem;
    }

    .buttons {
      margin: 3rem auto auto auto;
      display: flex;
      justify-content: space-between;
      max-width: 300px;
    }
    @media screen and (max-width: 992px) {
      h1 {
        font-size: 4rem;
      }
    }

    @media screen and (max-width: 600px) {
      h1 {
        font-size: 3rem;
      }
      .buttons {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 1rem;
      }
    }
  }
`;
