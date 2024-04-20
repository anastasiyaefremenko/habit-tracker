import React, { useState } from "react";
import {
  StyledFolderIcon,
  FolderNameInput,
  Root,
  Label,
  ThreeDotsButton,
  StyledPenButton,
  StyledPenIcon,
  StyledTrashIcon,
  StyledTrashButton,
  FolderButtonsContainer,
  InputContainer,
} from "./styles/FolderItem.styled";
import { Folder } from "../types";

type FolderItemPropsType = {
  folder: Folder;
  onConfirm: (folder: Folder) => void;
  startRenaming: boolean;
  showThreeDots: boolean;
  hideThreeDots: () => void;
  delete: (id: string) => void;
  showConfirmation: (folderId: string) => void;
};

const FolderItem = (props: FolderItemPropsType) => {
  const [newFolderName, setNewFolderName] = useState("");
  const [renaming, setRenaming] = useState(props.startRenaming);
  const [areEditButtonsVisible, setAreEditbuttonsVisible] = useState(false);

  function handleInputChange(event: any) {
    setNewFolderName(event.target.value);
  }
  const handleShowEditButtons = () => {
    setAreEditbuttonsVisible(!areEditButtonsVisible);
    props.hideThreeDots();
  };
  const confirmChange = (event: any) => {
    if (event.keyCode === 13) {
      if (newFolderName !== "") {
        const updatedFolder = { ...props.folder, folderName: newFolderName };
        props.onConfirm(updatedFolder);
        setRenaming(false);
      }
    }
  };
  const renameFolder = () => {
    setRenaming(true);
    handleShowEditButtons();
    setAreEditbuttonsVisible(false);
  };
  const handleDeleteClick = () => {
    props.showConfirmation(props.folder.id);
    setAreEditbuttonsVisible(false);
  };

  return (
    <Root>
      <InputContainer>
        <Label htmlFor="folder">
          <StyledFolderIcon></StyledFolderIcon>
        </Label>
        <FolderNameInput
          onChange={handleInputChange}
          value={renaming ? newFolderName : props.folder.folderName}
          disabled={!renaming}
          placeholder="Folder Name"
          name="folder"
          onKeyDown={renaming ? confirmChange : () => {}}
          autoFocus
        ></FolderNameInput>
      </InputContainer>
      <FolderButtonsContainer>
        {props.showThreeDots && (
          <ThreeDotsButton onClick={handleShowEditButtons}>⋯</ThreeDotsButton>
        )}
        {areEditButtonsVisible && (
          <StyledPenButton onClick={renameFolder}>
            <StyledPenIcon />
          </StyledPenButton>
        )}
        {areEditButtonsVisible && (
          <StyledTrashButton onClick={handleDeleteClick}>
            <StyledTrashIcon />
          </StyledTrashButton>
        )}
      </FolderButtonsContainer>
    </Root>
  );
};

export default FolderItem;
