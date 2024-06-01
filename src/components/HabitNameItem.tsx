import React, { useState } from "react";
import { Root, FolderNameInput } from "./styles/HabitNameItem.styled";

const HabitNameItem = (props: any) => {
  const [newHabitName, setNewHabitName] = useState("");
  const [renaming, setRenaming] = useState(false);
  return (
    <Root>
      <FolderNameInput
        placeholder="Habit name"
        value={renaming ? newHabitName : props.habitName}
        disabled={!renaming}
      />
    </Root>
  );
};

export default HabitNameItem;
