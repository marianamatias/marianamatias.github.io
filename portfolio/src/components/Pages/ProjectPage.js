import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar";

const ProjectPage = ({ className, children }) => {
  const [scrolled, setScrolled] = useState();

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
  }, [scrolled]);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledAmount = `${(scrollPx / winHeightPx) * 100}%`;
    setScrolled(scrolledAmount);
  };

  return (
    <div className={className}>
      <ProgressBar width={scrolled} />
      {children}
    </div>
  );
};

export default styled(ProjectPage)`
  max-width: 800px;
  margin: auto;
  h2 {
    font-size: 2rem;
  }
  img {
    width: 100%;
  }
`;
