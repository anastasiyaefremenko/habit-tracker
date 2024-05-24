import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { Folders, FoldersContextType, Habit } from "./types";
import FolderListPage from "./views/FolderListPage";
import CalendarsListPage from "./views/CalendarsListPage";
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
  const [currentFolder, setCurrentFolder] = useState(undefined);
  const [currentHabit, setCurrentHabit] = useState(undefined);
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
    currentFolder: currentFolder,
    setCurrentFolder: setCurrentFolder,
    currentHabit: currentHabit,
    setCurrentHabit: setCurrentHabit,
    view: view,
    setView: setView,
  };
};

export const ContextV2 = React.createContext<FoldersContextType>({
  folders: [],
  changeFolders: () => {},
  currentFolder: undefined,
  setCurrentFolder: () => {},
  currentHabit: undefined,
  setCurrentHabit: () => {},
  view: undefined,
  setView: () => {},
});

const App = () => {
  const {
    folders,
    changeFolders,
    currentFolder,
    setCurrentFolder,
    currentHabit,
    setCurrentHabit,
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
        currentHabit,
        setCurrentHabit,
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
      {view === Pages.MARK_DAY_PAGE && <MarkDayPage />}
    </div>
  );
};

export default App;
