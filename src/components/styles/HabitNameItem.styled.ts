import styled from "styled-components";
import {
  themeColorPrimary,
  themeColorSecondary,
} from "../../styles/themeColors";

export const Root = styled.div<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.color : themeColorPrimary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  padding-inline: 30px;
  margin-bottom: 28px;
  margin-top: 28px;
`;

export const FolderNameInput = styled.input`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  //background-color: aliceblue;
  height: 38px;

  &:disabled {
    color: black;
  }
`;
