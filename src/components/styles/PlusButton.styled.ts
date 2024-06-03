import styled from "styled-components";
import { themeColorSecondary } from "../../styles/themeColors";
import { GoPlus } from "react-icons/go";
import { BsFolderPlus } from "react-icons/bs";

export const StyledPlusButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding-inline: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 84px;
`;

export const StyledPlusButton = styled.button`
  background-color: transparent;
  border: none;
  padding-bottom: 30px;
`;

export const StyledPlusIcon = styled(BsFolderPlus)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 30px;
  width: 30px;
`;
