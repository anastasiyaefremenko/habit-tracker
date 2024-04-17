import React from "react";
import {
  Root,
  TranparentBackground,
  StyledContextualMenuContainer,
  StyledButton,
  ConfirmationNote,
} from "./styles/ConfirmDeleting.styled";

type ConfirmDeletingPropsType = {
  delete: () => void;
};

export const ConfirmDeleting = (props: ConfirmDeletingPropsType) => {
  return (
    <Root>
      <TranparentBackground />
      <StyledContextualMenuContainer>
        <ConfirmationNote>All habits will be deleted.</ConfirmationNote>
        <StyledButton onClick={props.delete}>Delete Folder</StyledButton>
      </StyledContextualMenuContainer>
    </Root>
  );
};
