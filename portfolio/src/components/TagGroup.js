import React from "react";
import styled from "styled-components";
import Tag from "./Tag";

const TagGroup = ({ className, tags }) => {
  return (
    <div className={className}>
      {tags && tags.map((tag, i) => <Tag key={i} tag={tag}></Tag>)}
    </div>
  );
};

export default styled(TagGroup)`
  display: flex;
  flex-wrap: wrap;
`;
