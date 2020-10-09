import React from "react";
import styled from "styled-components";

const colors = {
  tech: "#ab0acf",
  concept: "#ff3b00",
};

const Tag = ({ className, tag }) => {
  return <p className={className}>{tag.text}</p>;
};

export default styled(Tag)`
  border-radius: 60px;
  border: 2px solid ${(props) => colors[props.tag.type]};
  color: ${(props) => colors[props.tag.type]};
  font-weight: 600;
  font-size: 8pt;
  margin: 2px 5px;
  padding: 0px 10px;
`;
