import React, { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import FolderItem from "../components/FolderItem";
import { Folder, Folders } from "../types";
import PlusButton from "../components/PlusButton";
import { FoldersContext } from "../App";

const Root = styled.div`
  height: 100%;
`;

const FolderListContainer = styled.div`
  min-height: 60vh;
`;

const FolderListPage = () => {
  const { folders, changeFolders } = useContext(FoldersContext);

  return (
    <Root>
      <Header back={false} title={"Folders"}></Header>

      <FolderListContainer>
        {folders.map((folder: Folder) => (
          <FolderItem key={folder.id} folder={folder}></FolderItem>
        ))}
      </FolderListContainer>
      <PlusButton />
    </Root>
  );
};
export default FolderListPage;
