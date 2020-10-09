import React from "react";
import styled from "styled-components";

const Menu = ({ className, children }) => {
  return (
    <div className={className}>
      <nav>{children}</nav>
    </div>
  );
};

export default styled(Menu)`
  display: flex;
  justify-content: space-between;
  background: white;
  opacity: 0.8;
  width: 100%;
  padding: 1.5rem 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  p {
    font-family: "Dawning of a New Day", cursive;
  }
  
  nav {
    margin: auto;
    width: 1000px;
    overflow: hidden;
    display: flex;
    justify-content: flex-end;
    font-size: 14pt;
  }

  a {
    margin-right: 2rem;
    text-decoration: none;
    transition: all 0.3s ease;
    color: black;

    &.active {
      &:after {
        width: 100%;
        background: #ff3b00;
      }
    }

    :after {
      content: "";
      display: block;
      margin: auto;
      height: 4px;
      width: 0px;
      transition: all 0.5s ease;
      background: transparent;
    }

    :hover {
      &:after {
        width: 100%;
        background: #ff3b00;
      }
    }
  }

  @media screen and (max-width: 992px) {
    p {
      display: none;
    }
    nav {
      justify-content: flex-start;
    }
  }
`;
