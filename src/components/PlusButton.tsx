import React from "react";
import {
  StyledPlusButton,
  StyledPlusButtonContainer,
} from "./styles/PlusButton.styled";

type PlusButtonProps = {
  onPlusButtonClick: () => void;
};

const PlusButton = (props: PlusButtonProps) => {
  return (
    <StyledPlusButtonContainer>
      <StyledPlusButton onClick={props.onPlusButtonClick}></StyledPlusButton>
    </StyledPlusButtonContainer>
  );
};

export default PlusButton;
