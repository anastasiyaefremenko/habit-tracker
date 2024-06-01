import React from "react";
import { StyledEditButton } from "./styles/EditButton.styled";

type EditButtonProps = {
  onEdit: () => void;
  editButtonDisabled: boolean;
};

const EditButton = (props: EditButtonProps) => {
  return (
    <StyledEditButton
      onClick={props.onEdit}
      disabled={props.editButtonDisabled}
    >
      Edit
    </StyledEditButton>
  );
};

export default EditButton;
