import React from "react";
import {
  StyledCreateHabbitIcon,
  StyledPlusButtonContainer,
  StyledPlusButton,
} from "./styles/PlusButton.styled";

const CreateHabitButton = (props: any) => {
  return (
    <StyledPlusButtonContainer>
      <StyledPlusButton onClick={props.openCreateHabitPage}>
        <StyledCreateHabbitIcon />
      </StyledPlusButton>
    </StyledPlusButtonContainer>
  );
};

export default CreateHabitButton;
