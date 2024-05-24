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
  const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false);

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

  const {
    folders,
    changeFolders,
    currentFolder,
    setCurrentFolder,
    view,
    setView,
  } = useContext(ContextV2);
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
  const [showDots, setShowDots] = useState(false);
  const [showEyes, setShowEyes] = useState(true);
  const onEdit = () => {
    setShowDots(true);
    setShowEyes(false);
    setIsEditButtonDisabled(true);
  };
  const hideThreeDotsButoon = () => {
    setShowDots(false);
  };
  const updateHabit = (updatedHabit: Habit) => {
    const updatedHabitIndex = currentFolder?.habits.findIndex(
      (habit) => habit.id === updatedHabit.id
    );
    const foldersCopy = [...folders];
    if (updatedHabitIndex !== undefined) {
      foldersCopy.forEach((folder: Folder) => {
        if (folder.id === currentFolder?.id) {
          folder.habits.splice(updatedHabitIndex, 1, updatedHabit);
        }
      });
      changeFolders(foldersCopy);
    }
    setIsEditButtonDisabled(false);
    //changeFolders(foldersCopy)
  };

  return (
    <div>
      <CalendarHeader
        onEdit={onEdit}
        editButtonDisabled={isEditButtonDisabled}
      />
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
          onConfirm={updateHabit}
          habit={habit}
          startRenaming={habit.habitName === ""}
          id={habit.id}
          showEye={!hiddenHabitsFilter.find((id) => id === habit.id)}
          setShowEye={() => handleFilterChange(habit.id)}
          showDots={showDots}
          showEyes={showEyes}
          hideThreeDots={hideThreeDotsButoon}
        />
      ))}

      <CreateHabitButton
        openCreateHabitPage={() => setView(Pages.CREATE_HABIT_PAGE)}
      />
    </div>
  );
};

export default HabitsPage;
