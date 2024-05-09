import React from "react";
import styled from "styled-components";
import { GiRaddish } from "react-icons/gi";
import { themeColorSecondary } from "../styles/themeColors";
import { BsCalendarPlus } from "react-icons/bs";

const Root = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding-right: 24px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 84px;
`;
const StyledCreateHabbitButton = styled.button`
  border: none;
  background: transparent;
  padding-bottom: 30px;
`;
const StyledCreateHabbitIcon = styled(BsCalendarPlus)<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : themeColorSecondary)};
  height: 30px;
  width: 30px;
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
