import React, { useEffect, useState } from "react";
import "./App.css";
import FolderListPage from "./views/FolderListPage";
import { Folders, FoldersContextType } from "./types";
import HabitsListPage from "./views/HabitsListPage";
export const useFolderContextV2 = () => {
  const foldersStringFromStorage = localStorage.getItem("folders");

  const data =
    foldersStringFromStorage !== null
      ? JSON.parse(foldersStringFromStorage)
      : [];

  const [folders, changeFolders] = useState<Folders>(data);

  const saveFoldersToLocalStorage = (foldersToSave: Folders) => {
    window.localStorage.setItem("folders", JSON.stringify(foldersToSave));
  };

  useEffect(() => {
    saveFoldersToLocalStorage(
      folders.filter((folder) => folder.folderName !== "")
    );
  }, [folders]);

  return React.createContext<FoldersContextType>({
    folders: folders,
    changeFolders: changeFolders,
  });
};

const App = () => {
  const [views, setViews] = useState({
    showFoldersListPage: false,
    showHabitsPage: true,
    showCreateHabitPage: false,
    showMarkHabitPage: false,
  });

  const ContextV2 = useFolderContextV2();

  return (
    <ContextV2.Provider value={{ folders: [], changeFolders: () => {} }}>
      <div>{views.showFoldersListPage && <FolderListPage />}</div>
      <div>{views.showHabitsPage && <HabitsListPage />}</div>
    </ContextV2.Provider>
  );
};

export default App;
