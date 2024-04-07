import React, { useState } from "react";
import "./App.css";
import FolderListPage from "./views/FolderListPage";
import { Folders, FoldersContextType } from "./types";

export const FoldersContext = React.createContext<FoldersContextType>({
  folders: [],
  changeFolders: () => {},
});

const App = () => {
  const [views, setViews] = useState({
    showFoldersListPage: true,
    showHabitsPage: false,
    showCreateHabitPage: false,
    showMarkHabitPage: false,
  });
  const [currentFolder, setCurrentFolder] = useState(undefined);
  const [currentHabit, setCurrentHabit] = useState(undefined);

  const [folders, setFolders] = useState<Folders>([
    { id: "", folderName: "Habits", habits: [], rename: false },
  ]);
  // const [folders, setFolders] = useState<Folders>([
  // ]);

  // const folders = [
  //   { id: "id", folderName: "Habits", habits: [] },
  //   { id: "id1", folderName: "Body", habits: [] },
  // ];
  // const [habits, setHabit] = useState([
  //   { habitName: "", markedDays: [], habitColour: "#BCD1F0" },
  // ]);
  return (
    <FoldersContext.Provider
      value={{ folders: folders, changeFolders: setFolders }}
    >
      <div>{views.showFoldersListPage && <FolderListPage />}</div>
    </FoldersContext.Provider>
  );
};

export default App;
