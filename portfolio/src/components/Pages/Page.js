import React from "react";
import styled from "styled-components";

const PageContainer = ({ className, children, title }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default styled(PageContainer)``;
