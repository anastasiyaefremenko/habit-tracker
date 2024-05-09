import React, { useState } from "react";
import {
  Subtitle,
  Root,
  HabitNameInput,
  ColorNameButton,
} from "./styles/CreateHabitField.styled";

const CreateHabitField = (props: any) => {
  const handleInputChange = (event: any) => {
    props.setNewHabitName(event.target.value);
  };
  return (
    <div>
      <Root>
        <Subtitle>Habit name:</Subtitle>
        <HabitNameInput onChange={handleInputChange} autoFocus></HabitNameInput>
        <Subtitle>Color:</Subtitle>
        <ColorNameButton value={props.color} onClick={props.showColorPicker}>
          {props.color}
        </ColorNameButton>
      </Root>
    </div>
  );
};

export default CreateHabitField;
