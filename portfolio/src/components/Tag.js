import React from "react";
import styled from "styled-components";

const Tag = ({ className, children }) => {
  return <p className={className}>{children}</p>;
};

export default styled(Tag)`
  border-radius: 60px;
  background: #DC7765;
  color: white;
  font-size: 10pt;
  margin: 2px 5px;
  padding: 5px 10px;
`;
