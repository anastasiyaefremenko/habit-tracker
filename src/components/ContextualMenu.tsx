import React, { useContext } from "react";
import {
  StyledContextualMenuContainer,
  StyledButton,
} from "./styles/ContextualMenu.styled";
import { ContextualMenuContext } from "./PlusButton";
import { FoldersContext } from "../App";
import { v4 as uuidv4 } from "uuid";

export const ContextualMenu = (props: any) => {
  const { isContextualMenuVisible, setIsContextualMenuVisible } = useContext(
    ContextualMenuContext
  );
  const { folders, changeFolders } = useContext(FoldersContext);

  const createNewFolder = (event: React.MouseEvent<HTMLElement>) => {
    const id = uuidv4();
    const newFolder = {
      id: id,
      folderName: "",
      habits: [],
      rename: true,
    };
    changeFolders([...folders, newFolder]);
    event.preventDefault();
    setIsContextualMenuVisible(false);
  };
  return (
    <StyledContextualMenuContainer>
      <StyledButton>New habit</StyledButton>
      <StyledButton onClick={createNewFolder}>New folder</StyledButton>
    </StyledContextualMenuContainer>
  );
};
