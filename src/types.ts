export type Habit = {
  habitName: string;
  markedDays: string[];
  habitColour: string;
};
export type Folder = {
  id: string;
  folderName: string;
  habits: Habit[];
  rename: boolean;
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
