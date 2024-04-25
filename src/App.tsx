import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Folders, FoldersContextType } from "./types";
import { FOLDER_LIST, CALENDAR_PAGE } from "./views/views";

export const useFolderContextV2 = () => {
  const foldersStringFromStorage = localStorage.getItem("folders");

  const data =
    foldersStringFromStorage !== null
      ? JSON.parse(foldersStringFromStorage)
      : [];

  const [folders, changeFolders] = useState<Folders>(data);
  const [currentFolder, setCurrentFolder] = useState(undefined);
  const [view, setView] = useState(FOLDER_LIST);

  const saveFoldersToLocalStorage = (foldersToSave: Folders) => {
    window.localStorage.setItem("folders", JSON.stringify(foldersToSave));
  };

  useEffect(() => {
    saveFoldersToLocalStorage(
      folders.filter((folder) => folder.folderName !== "")
    );
  }, [folders, view]);

  return React.createContext<FoldersContextType>({
    folders: folders,
    changeFolders: changeFolders,
    currentFolder: currentFolder,
    setCurrentFolder: setCurrentFolder,
    view: view,
    setView: setView,
  });
};

const App = () => {
  const ContextV2 = useFolderContextV2();

  return (
    <ContextV2.Provider
      value={{
        folders: [],
        changeFolders: () => {},
        currentFolder: undefined,
        setCurrentFolder: () => {},
        view: undefined,
        setView: () => {},
      }}
    >
      <View />
    </ContextV2.Provider>
  );
};

const View = () => {
  const ContextV2 = useFolderContextV2();
  const { view, currentFolder, setView } = useContext(ContextV2);

  console.log({ view, currentFolder, setView });

  useEffect(() => {
    console.log({ view });
    console.log({ currentFolder });
    console.log({ setView });
  }, [view, currentFolder]);
  return <div>{view}</div>;
};

export default App;
