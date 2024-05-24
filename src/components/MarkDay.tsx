import React, { useContext, useState } from "react";
import {
  HabitName,
  Root,
  HabitNameContainer,
  Circle,
  LeftButton,
  RightButton,
  CurrentDate,
} from "./styles/MarkDay.styled";
import date from "date-and-time";

const MarkDay = (props: any) => {
  const now = new Date();
  const [currentDate, setCurrentDate] = useState(now);
  const formattedDete = date.format(currentDate, "D MMM YYYY");
  const changeToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    setCurrentDate(newDate);
  };
  const changeToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    setCurrentDate(newDate);
  };
  return (
    <div>
      <HabitNameContainer>
        <HabitName value={props.habitName} disabled={true}></HabitName>
      </HabitNameContainer>
      <CurrentDate>{formattedDete}</CurrentDate>
      <LeftButton onClick={changeToPreviousDay}>{"<"}</LeftButton>
      <Circle marked={false} selected={true} color={props.habitColor} />
      <RightButton onClick={changeToNextDay}>{">"}</RightButton>
    </div>
  );
};

export default MarkDay;
