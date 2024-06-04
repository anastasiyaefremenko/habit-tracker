import styled from "styled-components";
import { themeColorSecondary } from "../../styles/themeColors";
import { BsFolderPlus } from "react-icons/bs";
import { PiListPlusLight } from "react-icons/pi";

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
  -webkit-tap-highlight-color: transparent;
`;

export const StyledPlusIcon = styled(BsFolderPlus)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 30px;
  width: 30px;
`;
export const StyledCreateHabbitIcon = styled(PiListPlusLight)<{
  color?: string;
}>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 31px;
  width: 31px;
`;
