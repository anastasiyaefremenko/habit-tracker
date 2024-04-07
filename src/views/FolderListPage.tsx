import React, { useContext, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import FolderItem from "../components/FolderItem";
import { Folder, Folders } from "../types";
import PlusButton from "../components/PlusButton";
import { FoldersContext } from "../App";
import { v4 as uuid } from "uuid";
import { ContextualMenu } from "../components/ContextualMenu";

const Root = styled.div`
  height: 100%;
`;

const FolderListContainer = styled.div`
  min-height: 60vh;
`;

const FolderListPage = () => {
  const { folders, changeFolders } = useContext(FoldersContext);
  const [isContextualMenuVisible, setIsContextualMenuVisible] = useState(false);

  const openContextualMenu = () => {
    setIsContextualMenuVisible(true);
  };

  const closeContextualMenu = () => {
    setIsContextualMenuVisible(false);
  };

  const addNewFolder = () => {
    const id = uuid();
    const newFolder = {
      id: id,
      folderName: "",
      habits: [],
    };
    changeFolders([...folders, newFolder]);
    closeContextualMenu();
  };

  const updateFolder = (updatedFolder: Folder) => {
    const updatedFolderIndex = folders.findIndex(
      (folder) => folder.id === updatedFolder.id
    );

    const foldersCopy = [...folders];

    foldersCopy.splice(updatedFolderIndex, 1, updatedFolder);

    changeFolders(foldersCopy);
  };

  return (
    <Root>
      <Header back={false} title={"Folders"}></Header>

      <FolderListContainer>
        {folders.map((folder: Folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            startRenaming={folder.folderName === ""}
            onConfirm={updateFolder}
          ></FolderItem>
        ))}
      </FolderListContainer>
      {isContextualMenuVisible && <ContextualMenu onNewFolder={addNewFolder} />}
      <PlusButton onPlusButtonClick={openContextualMenu} />
    </Root>
  );
};
export default FolderListPage;
