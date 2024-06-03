import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Folders, FoldersContextType, Habit } from "./types";
import FolderListPage from "./views/FolderListPage";
import { Pages } from "./views/views";
import HabitsPage from "./views/HabitsPage";
import CreateNewHabitPage from "./views/CreateNewHabitPage";
import MarkDayPage from "./views/MarkDayPage";

export const useFolderContextV2 = () => {
  const foldersStringFromStorage = localStorage.getItem("folders");

  const data =
    foldersStringFromStorage !== null
      ? JSON.parse(foldersStringFromStorage)
      : [];

  const [folders, changeFolders] = useState<Folders>(data);
  const [currentFolderId, setCurrentFolderId] = useState("");
  const [currentHabitId, setCurrentHabitId] = useState("");
  const [view, setView] = useState(Pages.FOLDER_LIST);

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
    currentFolderId: currentFolderId,
    setCurrentFolderId: setCurrentFolderId,
    currentHabitId: currentHabitId,
    setCurrentHabitId: setCurrentHabitId,
    view: view,
    setView: setView,
  };
};

export const ContextV2 = React.createContext<FoldersContextType>({
  folders: [],
  changeFolders: () => {},
  currentFolderId: "",
  setCurrentFolderId: () => {},
  currentHabitId: "",
  setCurrentHabitId: () => {},
  view: undefined,
  setView: () => {},
});

const App = () => {
  const {
    folders,
    changeFolders,
    currentFolderId,
    setCurrentFolderId,
    currentHabitId,
    setCurrentHabitId,
    view,
    setView,
  } = useFolderContextV2();

  return (
    <ContextV2.Provider
      value={{
        folders,
        changeFolders,
        currentFolderId,
        setCurrentFolderId,
        currentHabitId,
        setCurrentHabitId,
        view,
        setView,
      }}
    >
      <View />
    </ContextV2.Provider>
  );
};

const View = () => {
  const { view, currentFolderId, setView } = useContext(ContextV2);

  useEffect(() => {}, [view, currentFolderId]);
  return (
    <div>
      {view === Pages.FOLDER_LIST && <FolderListPage />}
      {view === Pages.HABITS_PAGE && <HabitsPage />}
      {view === Pages.CREATE_HABIT_PAGE && <CreateNewHabitPage />}
      {view === Pages.MARK_DAY_PAGE && <MarkDayPage />}
    </div>
  );
};

export default App;
