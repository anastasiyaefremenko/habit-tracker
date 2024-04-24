import React, { useContext, useState } from "react";
import Calendar from "../components/Calendar";
import CalendarTitle from "../components/CalendarTitle";
import HabitNameItem from "../components/HabitNameItem";
import CalendarHeader from "../components/CalendarHeader";
import { Folder, Folders, Habit } from "../types";
import date from "date-and-time";

const HabitsListPage = () => {
  const today = new Date();
  const myDate = date.format(today, "YYYY-MM-DD");
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
          "2024-02-29",
          "2024-03-04",
          "2024-03-03",
          "2024-03-01",
          "2024-03-05",
          "2024-03-08",
          "2024-03-10",
          "2024-03-12",
          "2024-03-14",
          "2024-03-17",
          "2024-03-15",
          "2024-03-24",
          "2024-03-23",
          "2024-03-22",
        ],
        habitColour: "#BCD1F0",
      },
      {
        id: "5678",
        habitName: "Stretching",
        markedDays: ["2024-03-04"],
        habitColour: "#BCD1F0",
      },
      {
        id: "9012",
        habitName: "Drink Water",
        markedDays: ["2024-03-04"],
        habitColour: "#BCD1F0",
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
          <Calendar marked={false} month={currentMonth} year={currentYear} />
        </div>
      ))}
    </div>
  );
};

export default HabitsListPage;
