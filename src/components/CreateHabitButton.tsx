import React from "react";
import styled from "styled-components";
import { themeColorSecondary } from "../styles/themeColors";
import { PiListPlusLight } from "react-icons/pi";

const Root = styled.div`
  display: flex;
  padding-inline: 28px;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 84px;
`;
const StyledCreateHabbitButton = styled.button`
  border: none;
  background: transparent;
  padding-bottom: 30px;
  -webkit-tap-highlight-color: transparent;
`;
const StyledCreateHabbitIcon = styled(PiListPlusLight)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 31px;
  width: 31px;
`;

const CreateHabitButton = (props: any) => {
  return (
    <Root>
      <StyledCreateHabbitButton onClick={props.openCreateHabitPage}>
        <StyledCreateHabbitIcon />
      </StyledCreateHabbitButton>
    </Root>
  );
};

export default CreateHabitButton;
