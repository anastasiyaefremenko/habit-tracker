import React, { useContext, useState } from "react";
import {
  HabitName,
  HabitNameContainer,
  Circle,
  LeftButton,
  RightButton,
  CurrentDate,
  DayOfTheWeek,
  DayItemContainer,
  CirclesNavigationContainer,
  CheckMark,
} from "./styles/MarkDay.styled";
import date from "date-and-time";
import { Habit } from "../types";

const MarkDay = (props: any) => {
  const now = new Date();
  const [currentDate, setCurrentDate] = useState(now);
  const formattedDete = date.format(currentDate, "D MMM YYYY");

  const setDay = (n: number) => {
    const Day = new Date(currentDate);
    Day.setDate(currentDate.getDate() + n);
    return Day;
  };
  const formatDay = (day: Date) => {
    return date.format(day, "YYYY-MM-DD");
  };
  const formatedDayOfTheWeek = (day: Date) => {
    return date.format(day, "dd").slice(0, 1);
  };
  const previousDay = setDay(-1);
  const dayBeforePreviousDay = setDay(-2);
  const nextDay = setDay(1);
  const dayAfterNextDay = setDay(2);

  const changeToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };
  const changeToNextDay = (props: any) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  const daysToShow = [
    dayBeforePreviousDay,
    previousDay,
    currentDate,
    nextDay,
    dayAfterNextDay,
  ];
  const toggleMark = (day: Date) => {
    const dateToToggle = formatDay(day);
    props.updateMarkedDates(dateToToggle);
  };
  return (
    <div>
      <HabitNameContainer>
        <HabitName value={props.habit.habitName} disabled={true}></HabitName>
      </HabitNameContainer>
      <CurrentDate>{formattedDete}</CurrentDate>
      <CirclesNavigationContainer>
        <LeftButton onClick={changeToPreviousDay}>{"<"}</LeftButton>
        {daysToShow.map((day, index) => (
          <DayItemContainer>
            <Circle
              marked={props.habit.markedDays.includes(formatDay(day))}
              selected={index === 2}
              color={props.habit.habitColour}
              onClick={() => index === 2 && toggleMark(day)}
            >
              {index === 2 && (
                <CheckMark
                  marked={props.habit.markedDays.includes(formatDay(day))}
                />
              )}
            </Circle>
            <DayOfTheWeek>{formatedDayOfTheWeek(day)}</DayOfTheWeek>
          </DayItemContainer>
        ))}
        <RightButton onClick={changeToNextDay}>{">"}</RightButton>
      </CirclesNavigationContainer>
    </div>
  );
};

export default MarkDay;
