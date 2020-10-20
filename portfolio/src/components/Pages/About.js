import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import SocialLinks from "../SocialLinks";

const About = ({ className }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={className}>
      <h1>Olá! Salut! Hey!</h1>
      <div className="container">
        <img
          src={require("../../assets/images/lisboa.jpg")}
          alt="mariana"
          className={imageLoaded ? "visible" : "hidden"}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && <Skeleton height={400} />}
        <div className="text">
          <p>
            I'm Mariana and I'm studying Computer Science @ Georgia Tech. In my
            past internships and projects, I've taken on roles as a front-end
            developer and UX designer. I love exploring the intersection between
            development and design - from bringing wireframes alive to having
            fun with creative computing!
          </p>
          <p>
            My professional goal is to use my programming skills and technical
            knowledge to improve the access to quality education. At GT, I've
            been involved in clubs and initiatives to teach CS to students from
            underrepresented groups such as women and minorities. I also worked
            as a TA for the Girls Who Code Summer Immersion Program - one of the
            most fun and meaningful experiences I've had.
          </p>
          <p>
            My personal passion is a combination of traveling, learning
            languages, and discovering other cultures. I am a huge advocate for
            the benefits of travel - I've done a few exchanges in{" "}
            <a href="https://sites.gatech.edu/ramble-abroad-blog/2018/08/29/why-i-didnt-travel/">
              <mark>France</mark>
            </a>{" "}
            {/* <span role="img" aria-label="fr">
              🇫🇷
            </span> */}
            , I've interned in{" "}
            <a href="https://www.linkedin.com/posts/activity-6700114796425158656-GNy2">
              <mark>Brazil</mark>
            </a>{" "}
            {/* <span role="img" aria-label="br">
              🇧🇷
            </span> */}
            , and I'm just getting started!
          </p>
          <p>
            <strong>
              I'm graduating this December 2020 (!) and I'm currently looking
              for full-time roles as a UX engineer or a similar position.{" "}
            </strong>
          </p>
          {/* <p>
            In terms of personal development, I'm really excited to be learning
            data science! I'm starting an intensive data science program with
            Correlation One, and I can't wait to combine my software development
            background with predictive modeling to create great digital
            products!
          </p> */}
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default styled(About)`
  line-height: 1.5rem;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  .visible {
    visibility: visible;
  }

  .hidden {
    visibility: hidden;
    display: none;
  }

  .container {
    display: grid;
    grid-template-columns: 40% auto;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    img {
      border-radius: 0.15em;
      width: 100%;
      box-shadow: 6px 10px;
      transition: all 0.3s;
      &:hover {
        box-shadow: 10px 15px;
      }
    }
  }
  @media screen and (max-width: 992px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 600px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
