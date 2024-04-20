import React from "react";
import {
  Root,
  TranparentBackground,
  StyledContextualMenuContainer,
  StyledDeleteButton,
  ConfirmationNote,
  StyledCancelButton,
} from "./styles/ConfirmDeleting.styled";

type ConfirmDeletingPropsType = {
  delete: () => void;
  cancel: () => void;
};

export const ConfirmDeleting = (props: ConfirmDeletingPropsType) => {
  return (
    <Root>
      <TranparentBackground />
      <StyledContextualMenuContainer>
        <ConfirmationNote>All habits will be deleted.</ConfirmationNote>
        <StyledDeleteButton onClick={props.delete}>
          Delete Folder
        </StyledDeleteButton>
      </StyledContextualMenuContainer>
      <StyledCancelButton onClick={props.cancel}>Cancel</StyledCancelButton>
    </Root>
  );
};
