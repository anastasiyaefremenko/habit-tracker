import React from "react";
import date from "date-and-time";
import {
  Root,
  Circle,
  DateNumber,
  CircleContainer,
} from "./styles/Calendar.styled";

const MONTH_NAMES: Record<string, number> = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

const WEEK_DAYS: Record<string, number> = {
  Monday: 0,
  Tuesday: 1,
  Wednesday: 2,
  Thursday: 3,
  Friday: 4,
  Saturday: 5,
  Sunday: 6,
};

const Calendar = (props: any) => {
  const firstDayOfMonth = new Date(props.year, MONTH_NAMES[props.month], 1);
  const firstDayOfTheWeek = date.format(firstDayOfMonth, "dddd");
  const currentDay = new Date();
  const days: any = [];

  const numberOfEmptyContainers = WEEK_DAYS[firstDayOfTheWeek];
  for (let i = 0; i < numberOfEmptyContainers; i++) {
    days.push(<CircleContainer key={i}></CircleContainer>);
  }
  const daysInMonth = new Date(2024, 4, 0).getDate();
  const DAY_ONE = 1;
  for (let i = DAY_ONE; i <= daysInMonth; i++) {
    const thisDay = new Date(props.year, MONTH_NAMES[props.month], i);
    const formattedThisDay = date.format(thisDay, "YYYY-MM-DD");
    const isThisDayMarked = props.daysToMark.includes(formattedThisDay);

    days.push(
      <CircleContainer key={i}>
        <Circle $marked={isThisDayMarked} $isToday={i === currentDay.getDate()}>
          <DateNumber $marked={isThisDayMarked}>{i}</DateNumber>
        </Circle>
      </CircleContainer>
    );
  }

  return (
    <div>
      <Root>{days}</Root>
    </div>
  );
};

export default Calendar;
