import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const SocialLinks = ({ className }) => {
  return (
    <div className={className}>
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

  a {
    color: #444;
    font-size: 24px;
    transition: all 0.2s;
    :hover {
      color: #f80081;
    }
  }

  * {
    padding: 0 10px 0 10px;
  }
`;
