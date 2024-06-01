import React, { useContext, useState } from "react";
import Header from "../components/Header";
import CreateHabitField from "../components/CreateHabitField";
import SaveButton from "../components/SaveButton";
import ColorPicker from "../components/ColorPicker";
import { ContextV2 } from "../App";
import { Pages } from "./views";
import { v4 as uuid } from "uuid";
import { Folder } from "../types";
import { Root } from "../styles/CreateNewHabitPage.styled";

const CreateNewHabitPage = () => {
  const {
    currentFolderId,
    setCurrentFolderId,
    folders,
    changeFolders,
    view,
    setView,
  } = useContext(ContextV2);
  const [newHabitName, setNewHabitName] = useState("");
  const [color, setColor] = useState("#bcd1f0");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleSetShowColorPicker = () => {
    setShowColorPicker(true);
  };
  const createHabit = () => {
    if (newHabitName !== "") {
      const id = uuid();
      const newHabit = {
        id: id,
        habitName: newHabitName,
        markedDays: [],
        habitColour: color,
      };

      const updatedFolders = folders.map((f) => {
        if (f.id === currentFolderId) {
          const folderCopy: Folder = { ...f, habits: [...f.habits, newHabit] };
          return folderCopy;
        }

        return f;
      });
      changeFolders(updatedFolders);

      setView(Pages.HABITS_PAGE);
    }
  };

  return (
    <Root>
      <Header
        showBack={true}
        title={"New habit"}
        onClick={() => setView(Pages.HABITS_PAGE)}
      ></Header>
      <CreateHabitField
        color={color}
        showColorPicker={handleSetShowColorPicker}
        setNewHabitName={setNewHabitName}
        newHabitName={newHabitName}
      />
      <SaveButton createHabit={createHabit} />
      {showColorPicker && <ColorPicker color={color} setColor={setColor} />}
    </Root>
  );
};

export default CreateNewHabitPage;
