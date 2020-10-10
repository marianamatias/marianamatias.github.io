import React from "react";
import styled from "styled-components";

const colors = {
  tech: "#ab0acf",
  concept: "#ff3b00",
};

const Tag = ({ className, tag }) => {
  return <div className={className}>{tag.text}</div>;
};

export default styled(Tag)`
  font-family: "Karla", serif;
  border-radius: 60px;
  border: 2px solid ${(props) => colors[props.tag.type]};
  color: ${(props) => colors[props.tag.type]};
  font-weight: 600;
  font-size: 8pt;
  margin: 2px 5px;
  padding: 5px 10px;
`;
