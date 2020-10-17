import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import SocialLinks from "../SocialLinks";

const Home = ({ className }) => {
  return (
    <div className={className}>
      <div className="info">
        <h1>Mariana Matias</h1>
        <span className="description">
          <p>Front End Developer & UX Designer</p>
          <p>Computer Science @ Georgia Tech</p>
        </span>
        <SocialLinks />
      </div>
      <p className="footer">
        Made with <FontAwesomeIcon icon={faHeart} /> and React.js
      </p>
    </div>
  );
};

export default styled(Home)`
  .footer {
    font-size: 10pt;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    text-align: center;
    padding: 1rem 0;
    color: #b8b8b8;

    svg {
      transition: all 0.3s;
      &:hover {
        color: #f80081;
        transform: scale(1.3);
      }
    }
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
      font-size: 9rem;
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
        font-size: 5rem;
        text-shadow: none;
        font-weight: normal;
      }
      .description {
        display: none;
      }

      ${SocialLinks} {
        margin-top: 3rem;
        a {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
