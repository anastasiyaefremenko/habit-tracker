import styled from "styled-components";
import { themeColorSecondary } from "../../styles/themeColors";
import { GoPlus } from "react-icons/go";

export const StyledPlusButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding-right: 24px;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 80px;
`;

export const StyledPlusButton = styled(GoPlus)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 30px;
  width: 30px;
`;
