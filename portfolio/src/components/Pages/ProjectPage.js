import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProgressBar from "../ProgressBar";
import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const ProjectPage = ({ className, children }) => {
  const [scrolled, setScrolled] = useState();
  const [showFAB, setShowFAB] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);
    if (!showFAB && window.pageYOffset > 350) {
      setShowFAB(true);
    } else if (showFAB && window.pageYOffset <= 350) {
      setShowFAB(false);
    }
  }, [scrolled, showFAB]);

  const scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolledAmount = `${(scrollPx / winHeightPx) * 100}%`;
    setScrolled(scrolledAmount);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <ProgressBar width={scrolled} />
      {children}
      <div className="fab" style={{ display: showFAB ? "flex" : "none" }}>
        <Button onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAngleUp} size="2x" />
        </Button>
      </div>
    </div>
  );
};

export default styled(ProjectPage)`
  max-width: 800px;
  margin: auto;

  .fab {
    margin-bottom: 5rem;
    margin-right: 8rem;
    position: fixed;
    bottom: 0;
    right: 0;
    opacity: 0.8;
    transition: all 0.3s;

    ${Button} {
      padding: 0.5rem 1rem;
    }

    &:hover {
      opacity: 1;
    }
  }

  h2 {
    font-size: 2rem;
    margin-top: 3rem;
    margin-bottom: 0;
  }

  h3 {
    margin-top: 3rem;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    .fab {
      margin-bottom: 2rem;
      margin-right: 5rem;
    }
  }

  @media screen and (max-width: 600px) {
    .fab {
      margin-bottom: 1rem;
      margin-right: 2rem;
    }
  }
`;
