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
  notification: string;
  confirmation: string;
};

export const ConfirmDeleting = (props: ConfirmDeletingPropsType) => {
  return (
    <Root>
      <TranparentBackground />
      <StyledContextualMenuContainer>
        <ConfirmationNote>{props.notification}</ConfirmationNote>
        <StyledDeleteButton onClick={props.delete}>
          {props.confirmation}
        </StyledDeleteButton>
      </StyledContextualMenuContainer>
      <StyledCancelButton onClick={props.cancel}>Cancel</StyledCancelButton>
    </Root>
  );
};
