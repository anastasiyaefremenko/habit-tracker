import React, { useContext, useState } from "react";
import Header from "../components/Header";
import CreateHabitField from "../components/CreateHabitField";
import SaveButton from "../components/SaveButton";
import ColorPicker from "../components/ColorPicker";
import { ContextV2 } from "../App";
import { Pages } from "./views";
import { v4 as uuid } from "uuid";
import { Folder } from "../types";

const CreateNewHabitPage = () => {
  const {
    currentFolder,
    setCurrentFolder,
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
      console.log(currentFolder);
      const id = uuid();
      const newHabit = {
        id: id,
        habitName: newHabitName,
        markedDays: [],
        habitColour: color,
      };

      const updatedFolders = folders.map((f) => {
        if (f.id === currentFolder?.id) {
          const folderCopy: Folder = { ...f, habits: [...f.habits, newHabit] };

          // const folderCopy = { ...f }
          // folderCopy.habits.push(newHabit)
          return folderCopy;
        }

        return f;
      });

      const updatedCurrentFolder = updatedFolders.find(
        (f) => f.id === currentFolder?.id
      );
      setCurrentFolder(updatedCurrentFolder);

      changeFolders(updatedFolders);

      setView(Pages.HABITS_PAGE);
    }
  };

  return (
    <div>
      <Header showBack={true} title={"New habit"}></Header>
      <CreateHabitField
        color={color}
        showColorPicker={handleSetShowColorPicker}
        setNewHabitName={setNewHabitName}
        newHabitName={newHabitName}
      />
      <SaveButton createHabit={createHabit} />
      {showColorPicker && <ColorPicker color={color} setColor={setColor} />}
    </div>
  );
};

export default CreateNewHabitPage;
