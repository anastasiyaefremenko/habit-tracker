import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Folders, FoldersContextType } from "./types";
import FolderListPage from "./views/FolderListPage";
import CalendarsListPage from "./views/CalendarsListPage";
import { Pages } from "./views/views";
import HabitsPage from "./views/HabitsPage";
import CreateNewHabitPage from "./views/CreateNewHabitPage";

export const useFolderContextV2 = () => {
  const foldersStringFromStorage = localStorage.getItem("folders");

  const data =
    foldersStringFromStorage !== null
      ? JSON.parse(foldersStringFromStorage)
      : [];

  const [folders, changeFolders] = useState<Folders>(data);
  const [currentFolder, setCurrentFolder] = useState(undefined);
  const [view, setView] = useState(Pages.FOLDER_LIST);
  //const [view, setView] = useState(Pages.HABITS_PAGE);

  const saveFoldersToLocalStorage = (foldersToSave: Folders) => {
    window.localStorage.setItem("folders", JSON.stringify(foldersToSave));
  };

  useEffect(() => {
    saveFoldersToLocalStorage(
      folders.filter((folder) => folder.folderName !== "")
    );
  }, [folders, view]);

  return {
    folders: folders,
    changeFolders: changeFolders,
    currentFolder: currentFolder,
    setCurrentFolder: setCurrentFolder,
    view: view,
    setView: setView,
  };
};

export const ContextV2 = React.createContext<FoldersContextType>({
  folders: [],
  changeFolders: () => {},
  currentFolder: undefined,
  setCurrentFolder: () => {},
  view: undefined,
  setView: () => {},
});

const App = () => {
  const {
    folders,
    changeFolders,
    currentFolder,
    setCurrentFolder,
    view,
    setView,
  } = useFolderContextV2();

  return (
    <ContextV2.Provider
      value={{
        folders,
        changeFolders,
        currentFolder,
        setCurrentFolder,
        view,
        setView,
      }}
    >
      <View />
    </ContextV2.Provider>
  );
};

const View = () => {
  const { view, currentFolder, setView } = useContext(ContextV2);

  useEffect(() => {}, [view, currentFolder]);
  return (
    <div>
      {view === Pages.FOLDER_LIST && <FolderListPage />}
      {view === Pages.CALENDAR_PAGE && <CalendarsListPage />}
      {view === Pages.HABITS_PAGE && <HabitsPage />}
      {view === Pages.CREATE_HABIT_PAGE && <CreateNewHabitPage />}
    </div>
  );
};

export default App;
