import React from "react";
import {
  StyledPlusButton,
  StyledPlusIcon,
  StyledPlusButtonContainer,
} from "./styles/PlusButton.styled";

type PlusButtonProps = {
  disabled: boolean;
  onNewFolder: () => void;
};

const PlusButton = (props: PlusButtonProps) => {
  return (
    <StyledPlusButtonContainer>
      <StyledPlusButton disabled={props.disabled} onClick={props.onNewFolder}>
        <StyledPlusIcon />
      </StyledPlusButton>
    </StyledPlusButtonContainer>
  );
};

export default PlusButton;
