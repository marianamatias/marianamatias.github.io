import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const SocialLinks = ({ className }) => {
  return (
    <div className={className}>
      <p>Stay in touch :)</p>
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
  );
};

export default styled(SocialLinks)`
  text-align: center;
  margin-top: 2rem;

  a {
    color: black;
    font-size: 1.5rem;
    svg {
      transition: all 0.3s;
      &:hover {
        color: #f80081;
        transform: scale(1.2);
      }
    }
  }

  * {
    padding: 0 10px 0 10px;
  }
`;
