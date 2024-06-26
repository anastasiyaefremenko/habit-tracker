import React, { useContext, useState } from "react";
import Header from "../components/Header";
import FolderItem from "../components/FolderItem";
import { ConfirmDeleting } from "../components/ConfirmDeleting";
import { Folder, Folders } from "../types";
import PlusButton from "../components/PlusButton";
import { ContextV2, useFolderContextV2 } from "../App";
import { v4 as uuid } from "uuid";
import {
  FolderListContainer,
  Root,
  HeaderContainer,
} from "../styles/FolderListPage.styled";

type FolderListPagePropsType = {};

const FolderListPage = (props: FolderListPagePropsType) => {
  const { folders, changeFolders } = useContext(ContextV2);

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
    const foldersCopy = [...folders, newFolder];
    changeFolders(foldersCopy);

    console.log("inside add new folder", folders);
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
    setIsEditButtonDisabled(false);
  };
  const handleShowConfirmation = (folderId: string) => {
    setFolderIdToDelete(folderId);
  };
  const cancelDeletion = () => {
    setFolderIdToDelete(undefined);
    setIsEditButtonDisabled(false);
  };

  return (
    <Root>
      <HeaderContainer>
        <Header
          showBack={false}
          title={"Folders"}
          onEdit={showThreeDotsButoon}
          editButtonDisabled={isEditButtonDisabled}
        ></Header>
      </HeaderContainer>

      <FolderListContainer>
        {folders.map((folder: Folder) => (
          <FolderItem
            key={folder.id}
            folder={folder}
            startRenaming={folder.folderName === ""}
            onConfirm={updateFolder}
            showThreeDots={areThreeDotsVisible}
            hideThreeDots={hideThreeDotsButoon}
            showConfirmation={handleShowConfirmation}
          />
        ))}
      </FolderListContainer>
      <PlusButton disabled={isPlusButtonDisabled} onNewFolder={addNewFolder} />
      {folderIdToDelete !== undefined && (
        <ConfirmDeleting
          notification={"All habits will be deleted."}
          confirmation={"Delete Folder"}
          delete={deleteFolder}
          cancel={cancelDeletion}
        ></ConfirmDeleting>
      )}
    </Root>
  );
};
export default FolderListPage;
