import React, { useContext, useState } from "react";
import Calendar from "../components/Calendar";
import CalendarTitle from "../components/CalendarTitle";
import HabitNameItem from "../components/HabitNameItem";
import CalendarHeader from "../components/CalendarHeader";
import { Folder, Habit } from "../types";
import date from "date-and-time";

const CalendarsListPage = () => {
  const today = new Date();
  const currentMonth = date.format(today, "MMMM");
  const currentYear = date.format(today, "YYYY");

  const folder: Folder = {
    id: "21105003-ec0f-4b40-a897-1dbf6d39a283",
    folderName: "Body",
    habits: [
      {
        id: "1234",
        habitName: "Workout",
        markedDays: [
          "2024-04-20",
          "2024-04-04",
          "2024-04-03",
          "2024-04-01",
          "2024-04-05",
          "2024-04-08",
          "2024-03-10",
          "2024-04-12",
          "2024-04-14",
          "2024-04-17",
          "2024-04-15",
          "2024-04-24",
          "2024-04-23",
          "2024-04-22",
        ],
        habitColour: "#BCD1F0",
      },
      {
        id: "5678",
        habitName: "Stretching",
        markedDays: ["2024-04-04", "2024-04-14", "2024-04-17", "2024-04-15"],
        habitColour: "#C1CBDB",
      },
      {
        id: "9012",
        habitName: "Drink Water",
        markedDays: ["2024-04-12", "2024-04-22", "2024-04-24", "2024-04-19"],
        habitColour: "#E8E0D7",
      },
    ],
  };

  return (
    <div>
      <CalendarHeader />
      <CalendarTitle month={currentMonth} year={currentYear} />
      {folder.habits.map((habit: Habit) => (
        <div>
          <HabitNameItem habitName={habit.habitName} />
          <Calendar
            daysToMark={habit.markedDays}
            month={currentMonth}
            year={currentYear}
            customColor={habit.habitColour}
          />
        </div>
      ))}
    </div>
  );
};

export default CalendarsListPage;
