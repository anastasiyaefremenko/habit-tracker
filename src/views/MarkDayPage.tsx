import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { ContextV2 } from "../App";
import { Pages } from "./views";
import MarkDay from "../components/MarkDay";
import { Folder, Habit } from "../types";
import { Root } from "../styles/MarkDayPage.styled";

const MarkDayPage = () => {
  const {
    folders,
    changeFolders,
    currentFolderId,
    setCurrentFolderId,
    currentHabitId,
    setCurrentHabitId,
    view,
    setView,
  } = useContext(ContextV2);

  const currentFolder = folders.find((folder) => folder.id === currentFolderId);
  const currentHabit = currentFolder?.habits.find(
    (habit: Habit) => habit.id === currentHabitId
  );

  const handleClickBack = () => {
    setView(Pages.HABITS_PAGE);
  };
  const updateMarkedDates = (date: string) => {
    if (currentHabit === undefined) {
      return;
    }

    const markedDay = currentHabit?.markedDays.find((d) => d === date);
    const updatedFolders = folders.map((f) => {
      if (f.id === currentFolderId) {
        const updatedHabits = f.habits.map((h) => {
          if (h.id === currentHabitId) {
            if (markedDay === undefined) {
              const habitCopy = {
                ...currentHabit,
                markedDays: [...currentHabit.markedDays, date],
              };
              return habitCopy;
            } else {
              const habitCopy = {
                ...currentHabit,
                markedDays: currentHabit.markedDays.filter((d) => d !== date),
              };

              return habitCopy;
            }
          }

          return h;
        });

        const folderCopy = { ...f, habits: updatedHabits };
        return folderCopy;
      }
      return f;
    });
    changeFolders(updatedFolders);
  };
  return (
    <Root>
      <Header
        showBack={true}
        onClick={handleClickBack}
        title={currentFolder?.folderName}
      />
      <MarkDay habit={currentHabit} updateMarkedDates={updateMarkedDates} />
    </Root>
  );
};

export default MarkDayPage;
