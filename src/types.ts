export type Habit = {
  id: string;
  habitName: string;
  markedDays: string[];
  habitColour: string;
};
export type Folder = {
  id: string;
  folderName: string;
  habits: Habit[];
};

export type Folders = Folder[];

export type ContextualMenuContextType = {
  isContextualMenuVisible: boolean;
  setIsContextualMenuVisible: any;
};

export type FoldersContextType = {
  folders: Folders;
  changeFolders: any;
};
