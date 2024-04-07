import React, { useState } from "react";
import {
  StyledIcon,
  FolderNameInput,
  FolderItemContainer,
  Label,
} from "./styles/FolderItem.styled";
import { Folder } from "../types";

type FolderItemPropsType = {
  folder: Folder;
  onConfirm: (folder: Folder) => void;
  startRenaming: boolean;
};

const FolderItem = (props: FolderItemPropsType) => {
  const [newFolderName, setNewFolderName] = useState("");
  const [renaming, setRenaming] = useState(props.startRenaming);

  function handleInputChange(event: any) {
    setNewFolderName(event.target.value);
  }

  const confirmChange = (event: any) => {
    if (event.keyCode === 13) {
      const updatedFolder = { ...props.folder, folderName: newFolderName };
      props.onConfirm(updatedFolder);
      setRenaming(false);
    }
  };

  return (
    <FolderItemContainer>
      <Label htmlFor="folder">
        <StyledIcon></StyledIcon>
      </Label>
      <FolderNameInput
        onChange={renaming ? handleInputChange : () => {}}
        value={renaming ? newFolderName : props.folder.folderName}
        placeholder="Folder Name"
        name="folder"
        onKeyDown={renaming ? confirmChange : () => {}}
      ></FolderNameInput>
    </FolderItemContainer>
  );
};

export default FolderItem;
