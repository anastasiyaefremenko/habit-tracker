import React from "react";
import {
  Root,
  Circle,
  DateNumber,
  CircleContainer,
} from "./styles/Calendar.styled";

const Calendar = () => {
  const weekDays = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7,
  };

  const dateIndexToWeekdaysMap = {
    0: weekDays.sunday,
    1: weekDays.monday,
    2: weekDays.tuesday,
    3: weekDays.wednesday,
    4: weekDays.thursday,
    5: weekDays.friday,
    6: weekDays.saturday,
  };

  const firstDayOfTheMonthIndex = 5; // sunday
  const firstDayOfTheMonth = dateIndexToWeekdaysMap[firstDayOfTheMonthIndex];
  const d = new Date();
  const today = d.getDate();
  const days = [];
  for (let i = 1; i < 31; i++) {
    const marked = i < 15;
    days.push(
      i >= firstDayOfTheMonth ? (
        <CircleContainer>
          <Circle key={i} marked={marked} isToday={i === today}>
            <DateNumber marked={marked}>
              {i - (firstDayOfTheMonth - 1)}
            </DateNumber>
          </Circle>
        </CircleContainer>
      ) : (
        <CircleContainer></CircleContainer>
      )
    );
  }
  return (
    <div>
      <Root>{days}</Root>
    </div>
  );
};

export default Calendar;
