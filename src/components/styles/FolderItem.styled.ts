import styled from "styled-components";
import {
  themeColorPrimary,
  themeColorSecondary,
} from "../../styles/themeColors";
import { IoFolderOpenOutline } from "react-icons/io5";
import { BsFolder } from "react-icons/bs";
import { RiQuillPenLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { BsTrash } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";

const StyledFolderIcon = styled(BsFolder)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 26px;
  width: 24px;
`;
const StyledPenIcon = styled(HiOutlinePencil)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 22px;
  width: 22px;
`;
const StyledTrashIcon = styled(IoTrashOutline)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  color: #cba3a3;
  height: 22px;
  width: 22px;
`;
const StyledPenButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  width: 40px;
`;
const StyledTrashButton = styled.button`
  display: flex;
  justify-content: flex-end;
  border: none;
  width: 40px;
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
  &:disabled {
    color: black;
    pointer-events: none;
  }
`;
const Root = styled.div<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.color : themeColorPrimary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  padding-inline: 30px;
`;
const Label = styled.label`
  display: flex;
`;
const ThreeDotsButton = styled.button<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  font-size: 20px;
  font-weight: 900;
  border: none;
  display: flex;
`;
const FolderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //width: 60px;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export {
  StyledFolderIcon,
  FolderNameInput,
  Root,
  Label,
  ThreeDotsButton,
  StyledPenButton,
  StyledPenIcon,
  StyledTrashIcon,
  StyledTrashButton,
  FolderButtonsContainer,
  InputContainer,
};
