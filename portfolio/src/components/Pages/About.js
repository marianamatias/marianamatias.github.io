import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const About = ({ className }) => {
  return (
    <div className={className}>
      <h1>Olá! Salut! Hey!</h1>
      <div className="container">
        <div>
          <img src={require("../../assets/images/lisboa.jpg")} alt="mariana" />
        </div>
        <div className="text">
          <p>
            I'm Mariana and I'm studying Computer Science & HCI @ Georgia Tech.
            In my past internships and projects, I've taken on roles as a
            front-end developer and UX designer. I'm interested in the
            intersection between development and design and I love bringing
            wireframes to life!
          </p>
          <p>
            Since I'm graduating soon (this December 2020!), I'm currently
            looking for full-time roles as a UX engineer or a similar position.
            My professional goal is to use my programming skills and technical
            knowledge to improve the access to quality education.
          </p>
          <p>
            My biggest passion is a combination of traveling, learning
            languages, and discovering other cultures. I am a huge advocate for
            the benefits of travel - I've done a few exchanges in France 🇫🇷,
            I've interned in Brazil 🇧🇷, and I'm nowhere near done going abroad!
          </p>
          {/* <p>
            In terms of personal development, I'm really excited to be learning
            data science! I'm starting an intensive data science program with
            Correlation One, and I can't wait to combine my software development
            background with predictive modeling to create great digital
            products!
          </p> */}

          <div className="links">
            <h3 className="connect">Soyons amis!</h3>
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
      </div>
    </div>
  );
};

export default styled(About)`
  font-size: 14pt;
  line-height: 1.5rem;
  h1 {
    font-family: "Dawning of a New Day", cursive;
    text-align: center;
    text-shadow: 2px 2px 3px #ddd;
  }
  .container {
    img {
      width: 100%;
      box-shadow: 6px 10px;
      transition: all 0.3s;
      &:hover {
        box-shadow: 10px 15px;
      }
    }
    display: grid;
    grid-template-columns: 40% auto;
    grid-column-gap: 2rem;
  }

  .links {
    // font-family: "Dawning of a New Day", cursive;
    margin-top: 4rem;
    text-align: center;
    
    a {
      font-size: 24px;
      color: #ccc;
      transition: all 0.2s;


      :hover {
        color: rgb(156, 39, 176);
      }
    }
  }

  .links * {
    padding: 0 10px 0 10px;
  }
`;
