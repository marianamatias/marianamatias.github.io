import React from "react";
import styled from "styled-components";

const colors = { tech: "#d94f36", concept: "#AC3686" };

const Tag = ({ className, tag }) => {
  return <p className={className}>{tag.text}</p>;
};

export default styled(Tag)`
  border-radius: 60px;
  background: ${props => colors[props.tag.type]};
  color: white;
  font-size: 10pt;
  margin: 2px 5px;
  padding: 5px 10px;
`;
