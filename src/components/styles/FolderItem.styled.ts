import styled from "styled-components";
import {
  themeColorPrimary,
  themeColorSecondary,
} from "../../styles/themeColors";
import { IoFolderOpenOutline } from "react-icons/io5";

const StyledIcon = styled(IoFolderOpenOutline)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 26px;
  width: 24px;
`;
const FolderNameInput = styled.input`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 38px;
  margin-left: 14px;
`;
const FolderItemContainer = styled.div<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.color : themeColorPrimary};
  display: flex;
  align-items: center;
  margin-bottom: 6px;
`;
const Label = styled.label`
  display: flex;
  margin-left: 30px;
`;

export { StyledIcon, FolderNameInput, FolderItemContainer, Label };
