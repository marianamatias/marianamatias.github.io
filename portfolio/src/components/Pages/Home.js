import { faAngleRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";

const Home = ({ className }) => {
  var history = useHistory();
  return (
    <div className={className}>
      <div className="info">
        <h1>Mariana Matias</h1>
        <span className="description">
          <p>Front End Developer & UX Designer</p>
          <p>Computer Science @ Georgia Tech</p>
        </span>
        <Button className="float" onClick={() => history.push('/projects')}>
          See my projects <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
      <p className="footer">
        Made with <FontAwesomeIcon icon={faHeart} /> and React.js
      </p>
    </div>
  );
};

export default styled(Home)`
  .float {
    margin-top: 2rem;
  }

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
        font-size: 7rem;
      }
    }

    @media screen and (max-width: 600px) {
      h1 {
        line-height: 1em;
        text-shadow: none;
      }
      .description {
        display: none;
      }
    }
  }
`;
