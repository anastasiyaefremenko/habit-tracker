import React, { useContext, useState } from "react";
import {
  Root,
  HabitItemContainer,
  HabitColor,
  HabitName,
  EyeButton,
  EyeIcon,
  ClosedEyeIcon,
  DotsButton,
  ColorInputLabel,
  ColorInput,
  ColorInputContainer,
  HabitButtonsContainer,
  StyledPenButton,
  StyledPenIcon,
  StyledTrashButton,
  StyledTrashIcon,
  NameAndColorContainer,
} from "./styles/HabitItem.styled";
import { ContextV2 } from "../App";
import { Pages } from "../views/views";

const HabitItem = (props: any) => {
  const { currentHabit, setCurrentHabit, view, setView } =
    useContext(ContextV2);
  //const [showEye, setShowEye] = useState(true);
  const [showChangeButtons, setShowChangeButtons] = useState(false);
  const handleClickShowDots = () => {
    setShowChangeButtons(true);
    props.hideThreeDots();
  };
  const [newName, setNewName] = useState("");
  const [newColor, setNewColor] = useState("");
  const handleInputChange = (event: any) => {
    setNewName(event.target.value);
  };
  const handleInputColorChange = (event: any) => {
    setNewColor("#" + event.target.value);
  };
  const [renaming, setRenaming] = useState(props.startRenaming);
  const renameHabit = () => {
    setRenaming(true);
    setShowChangeButtons(false);
  };
  const confirmChange = (event: any) => {
    if (event.keyCode === 13) {
      if (newName !== "") {
        const updatedHabit = {
          ...props.habit,
          habitName: newName,
          habitColour: newColor,
        };
        props.onConfirm(updatedHabit);
        setRenaming(false);
      }
    }
  };
  const showMarkDayPage = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setCurrentHabit(props.habit);
    setView(Pages.MARK_DAY_PAGE);
  };
  return (
    <Root>
      <HabitItemContainer>
        <NameAndColorContainer onClick={showMarkDayPage} rename={renaming}>
          {renaming && (
            <ColorInputContainer>
              <ColorInputLabel htmlFor={"colorInput"}>#</ColorInputLabel>
              <ColorInput
                onClick={(e) => {
                  e.stopPropagation();
                }}
                name={"colorInput"}
                placeholder="Color"
                onChange={handleInputColorChange}
                onKeyDown={renaming ? confirmChange : () => {}}
              ></ColorInput>
            </ColorInputContainer>
          )}
          {!renaming && (
            <HabitColor
              onClick={showMarkDayPage}
              customColor={props.habit.habitColour}
              show={props.showEye}
            />
          )}
          <HabitName
            onClick={(e) => {
              e.stopPropagation();
            }}
            value={renaming ? newName : props.habit.habitName}
            placeholder="Habit name"
            onKeyDown={renaming ? confirmChange : () => {}}
            show={props.showEye}
            disabled={!renaming}
            onChange={handleInputChange}
            autoFocus
          />
        </NameAndColorContainer>
        {props.showEyes && (
          <EyeButton onClick={props.setShowEye}>
            {props.showEye ? <EyeIcon /> : <ClosedEyeIcon />}
          </EyeButton>
        )}
        {props.showDots && (
          <DotsButton onClick={handleClickShowDots}>⋯</DotsButton>
        )}
        {showChangeButtons && (
          <HabitButtonsContainer>
            <StyledPenButton onClick={renameHabit}>
              <StyledPenIcon />
            </StyledPenButton>
            <StyledTrashButton>
              <StyledTrashIcon />
            </StyledTrashButton>
          </HabitButtonsContainer>
        )}
      </HabitItemContainer>
    </Root>
  );
};
export default HabitItem;
