import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <h1>MARIANA MATIAS</h1>
      <p>Front End Developer & UI/UX Researcher</p>
      <p>Georgia Tech Computer Science</p>
      <button
        onClick={() => {
          window.open("https://www.linkedin.com/in/marimatias/", "_blank");
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
      <button
        onClick={() => {
          window.open("mailto:mariana@gatech.edu", "_blank");
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </button>
      <button
        onClick={() => {
          window.open("https://www.instagram.com/cestmariana/", "_blank");
        }}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </button>
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

  h1 {
    font-size: 7rem;
    font-family: "Karla", sans-serif;
    margin: 0rem;
    font-weight: 800;
  }

  p {
    line-height: 1rem;
    font-weight: 600;
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
