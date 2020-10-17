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
    </div>
  );
};

export default styled(Home)`
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
