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
  const [monthToShow, setMonthToShow] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(date.format(today, "MMMM"));
  const [currentYear, setCurrentYear] = useState(date.format(today, "YYYY"));

  const getPreviousMonth = () => {
    const previousMonth = new Date(monthToShow.getTime());
    previousMonth.setDate(0);
    setCurrentMonth(date.format(previousMonth, "MMMM"));
    setCurrentYear(date.format(previousMonth, "YYYY"));
    setMonthToShow(previousMonth);
  };
  const getNextMonth = () => {
    const nextMonth = new Date(monthToShow.getTime());
    nextMonth.setDate(32);
    setCurrentMonth(date.format(nextMonth, "MMMM"));
    setCurrentYear(date.format(nextMonth, "YYYY"));
    setMonthToShow(nextMonth);
  };

  const { currentFolder, setCurrentFolder, view, setView } =
    useContext(ContextV2);
  const [hiddenHabitsFilter, setHiddenHabitsFilter] = useState<string[]>([]);

  const handleFilterChange = (idChange: string) => {
    if (hiddenHabitsFilter.find((id) => id === idChange)) {
      const filteredhiddenHabitsFilter = hiddenHabitsFilter.filter(
        (id) => id !== idChange
      );
      setHiddenHabitsFilter(filteredhiddenHabitsFilter);
    } else {
      setHiddenHabitsFilter([...hiddenHabitsFilter, idChange]);
    }
  };

  return (
    <div>
      <CalendarHeader />
      <CalendarTitle
        month={currentMonth}
        year={currentYear}
        showPreviousMonth={getPreviousMonth}
        showNextMonth={getNextMonth}
      />
      <NamesOfDaysOfTheWeek />
      <CalendarDates
        folder={currentFolder}
        month={currentMonth}
        year={currentYear}
        hiddenHabits={hiddenHabitsFilter}
      />
      {currentFolder?.habits.map((habit: Habit) => (
        <HabitItem
          name={habit.habitName}
          customColor={habit.habitColour}
          id={habit.id}
          showEye={!hiddenHabitsFilter.find((id) => id === habit.id)}
          setShowEye={() => handleFilterChange(habit.id)}
        />
      ))}

      <CreateHabitButton
        openCreateHabitPage={() => setView(Pages.CREATE_HABIT_PAGE)}
      />
    </div>
  );
};

export default HabitsPage;
