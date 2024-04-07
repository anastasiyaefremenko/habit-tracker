import React from "react";
import {
  StyledContextualMenuContainer,
  StyledButton,
} from "./styles/ContextualMenu.styled";

type ContextualMenuProps = {
  onNewFolder: () => void;
};

export const ContextualMenu = (props: ContextualMenuProps) => {
  return (
    <StyledContextualMenuContainer>
      <StyledButton>New habit</StyledButton>
      <StyledButton onClick={props.onNewFolder}>New folder</StyledButton>
    </StyledContextualMenuContainer>
  );
};
