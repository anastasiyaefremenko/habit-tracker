import React from "react";
import styled from "styled-components";

const FoldersTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 36px;
`;

const Title = ({ title }: { title: String }) => {
  return <FoldersTitle>{title}</FoldersTitle>;
};
export default Title;
