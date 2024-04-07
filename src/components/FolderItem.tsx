import React, { useState } from "react";
import {
  StyledIcon,
  FolderNameInput,
  FolderItemContainer,
  Label,
} from "./styles/FolderItem.styled";
import { FoldersContext } from "../App";
import { Folder } from "../types";

type FolderItemPropsType = {
  folder: Folder;
};

const FolderItem = (props: FolderItemPropsType) => {
  const [newFolderName, setNewFolderName] = useState("");
  function handleInputChange(event: any) {
    setNewFolderName(event.target.value);
  }
  const saveFolder = (event: any) => {
    if (event.keyCode === 13) {
      alert("Saved");
      props.folder.rename = false;
      props.folder.folderName = newFolderName;
    }
  };
  return (
    <FolderItemContainer>
      <Label htmlFor="folder">
        <StyledIcon></StyledIcon>
      </Label>
      <FolderNameInput
        onChange={props.folder.rename ? handleInputChange : () => {}}
        value={props.folder.rename ? newFolderName : props.folder.folderName}
        placeholder="Folder Name"
        name="folder"
        onKeyDown={props.folder.rename ? saveFolder : () => {}}
      ></FolderNameInput>
    </FolderItemContainer>
  );
};

export default FolderItem;
