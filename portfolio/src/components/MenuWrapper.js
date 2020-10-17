import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Menu from "./Menu";

const MenuWrapper = ({ children, className }) => {
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
  }, [scrolled]);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    setScrolled(scrollPx);
  };

  return (
    <div className={className}>
      <Menu className="menu" scrollPosition={scrolled}>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink exact to="/projects">
          Projects
        </NavLink>
        {/* <NavLink to="/resume">Resume</NavLink> */}
      </Menu>
      {children}
    </div>
  );
};

export default styled(MenuWrapper)``;
