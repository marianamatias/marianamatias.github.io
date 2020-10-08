import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <h1>Mariana Matias</h1>
      <p>Front End Developer & UX Designer</p>
      <p>Georgia Tech Computer Science</p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/marimatias/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="mailto:mariana@gatech.edu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.instagram.com/cestmariana/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default styled(Home)`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  a {
    color: #ccc;
    font-size: 24px;
    transition: all 0.2s;

    :hover {
      color: rgb(156, 39, 176);
    }
  }

  .links * {
    padding: 0 10px 0 10px;
  }

  h1 {
    font-family: "Dawning of a New Day", cursive;
    font-size: 7rem;
    text-shadow: 2px 2px 5px #ccc;
    margin: 0rem;
    font-weight: 800;
  }

  p {
    line-height: 1rem;
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
  }
`;
