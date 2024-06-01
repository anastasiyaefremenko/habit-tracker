import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 36px;
`;

const Title = ({ title }: { title: String }) => {
  return <StyledTitle>{title}</StyledTitle>;
};
export default Title;
