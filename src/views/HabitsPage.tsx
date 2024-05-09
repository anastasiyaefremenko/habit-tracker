import React, { useContext, useState } from "react";
import CalendarHeader from "../components/CalendarHeader";
import CalendarTitle from "../components/CalendarTitle";
import date from "date-and-time";
import NamesOfDaysOfTheWeek from "../components/NamesOfDaysOfTheWeek";
import { Folder, Habit } from "../types";
import CalendarDates from "../components/CalendarDates";
import CreateHabitButton from "../components/CreateHabitButton";
import { Pages } from "./views";
import { ContextV2 } from "../App";
import HabitItem from "../components/HabitItem";

const HabitsPage = (props: any) => {
  const today = new Date();
  const currentMonth = date.format(today, "MMMM");
  const currentYear = date.format(today, "YYYY");

  const { currentFolder, setCurrentFolder, view, setView } =
    useContext(ContextV2);
  const showCreateNewHabitPage = () => {
    setView(Pages.CREATE_HABIT_PAGE);
  };
  return (
    <div>
      <CalendarHeader />
      <CalendarTitle month={currentMonth} year={currentYear} />
      <NamesOfDaysOfTheWeek />
      <CalendarDates
        //daysToMark={["2024-05-01", "2024-05-02", "2024-05-04", "2024-05-06"]}
        daysToMark={[]}
        folder={currentFolder}
        month={currentMonth}
        year={currentYear}
        customColor={"#E8E0D7"}
      />
      {currentFolder?.habits.map((habit: Habit) => (
        <HabitItem name={habit.habitName} customColor={habit.habitColour} />
      ))}

      <CreateHabitButton openCreateHabitPage={showCreateNewHabitPage} />
    </div>
  );
};

export default HabitsPage;
