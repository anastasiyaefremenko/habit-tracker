import React, { useContext, useState } from "react";
import Header from "../components/Header";
import { ContextV2 } from "../App";
import { Pages } from "./views";
import MarkDay from "../components/MarkDay";

const MarkDayPage = () => {
  const {
    folders,
    changeFolders,
    currentFolder,
    setCurrentFolder,
    currentHabit,
    setCurrentHabit,
    view,
    setView,
  } = useContext(ContextV2);
  const handleClickBack = () => {
    setView(Pages.HABITS_PAGE);
  };
  return (
    <div>
      <Header
        showBack={true}
        onClick={handleClickBack}
        title={currentFolder?.folderName}
      />
      <MarkDay
        habitName={currentHabit?.habitName}
        habitColor={currentHabit?.habitColour}
        folder={currentFolder}
      />
    </div>
  );
};

export default MarkDayPage;
