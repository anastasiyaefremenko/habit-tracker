import React, { useContext, useState } from "react";
import Header from "../components/Header";
import FolderItem from "../components/FolderItem";
import { ConfirmDeleting } from "../components/ConfirmDeleting";
import { Folder, Folders } from "../types";
import PlusButton from "../components/PlusButton";
import { FoldersContext } from "../App";
import { v4 as uuid } from "uuid";
import { FolderListContainer, Root } from "../styles/FolderListPage.styled";

const FolderListPage = () => {
  const { folders, changeFolders } = useContext(FoldersContext);

  const [isPlusButtonDisabled, setIsPlusButtonDisabled] = useState(false);
  const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false);
  const [areThreeDotsVisible, setAreThreeDotsVisible] = useState(false);

  const [folderIdToDelete, setFolderIdToDelete] = useState<string>();

  const addNewFolder = () => {
    const id = uuid();
    const newFolder = {
      id: id,
      folderName: "",
      habits: [],
    };
    changeFolders([...folders, newFolder]);
    setIsPlusButtonDisabled(true);
    setAreThreeDotsVisible(false);
    setIsEditButtonDisabled(true);
  };

  const updateFolder = (updatedFolder: Folder) => {
    const updatedFolderIndex = folders.findIndex(
      (folder) => folder.id === updatedFolder.id
    );

    const foldersCopy = [...folders];

    foldersCopy.splice(updatedFolderIndex, 1, updatedFolder);

    changeFolders(foldersCopy);
    setIsPlusButtonDisabled(false);
    setIsEditButtonDisabled(false);
  };

  const showThreeDotsButoon = () => {
    setAreThreeDotsVisible(true);
    setIsEditButtonDisabled(true);
  };
  const hideThreeDotsButoon = () => {
    setAreThreeDotsVisible(false);
  };
  const deleteFolder = () => {
    const foldersCopy = folders.filter(
      (folder) => folder.id !== folderIdToDelete
    );
    setFolderIdToDelete(undefined);
    changeFolders(foldersCopy);
  };
  const handleShowConfirmation = (folderId: string) => {
    setFolderIdToDelete(folderId);
  };

  return (
    <Root>
      <Header
        back={false}
        title={"Folders"}
        onEdit={showThreeDotsButoon}
        editButtonDisabled={isEditButtonDisabled}
      ></Header>

      <FolderListContainer>
        {folders.map((folder: Folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            startRenaming={folder.folderName === ""}
            onConfirm={updateFolder}
            showThreeDots={areThreeDotsVisible}
            hideThreeDots={hideThreeDotsButoon}
            delete={deleteFolder}
            showConfirmation={handleShowConfirmation}
          ></FolderItem>
        ))}
      </FolderListContainer>
      <PlusButton disabled={isPlusButtonDisabled} onNewFolder={addNewFolder} />
      {folderIdToDelete !== undefined && (
        <ConfirmDeleting delete={deleteFolder}></ConfirmDeleting>
      )}
    </Root>
  );
};
export default FolderListPage;
