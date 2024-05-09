import React from "react";
import { StyledSaveButton } from "./styles/SaveButton.styled";

const SaveButton = (props: any) => {
  return <StyledSaveButton onClick={props.createHabit}>Save</StyledSaveButton>;
};

export default SaveButton;
