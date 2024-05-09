import React from "react";
import { DayName, Root } from "./styles/NamesOfDaysOfTheWeek.styled";

const NamesOfDaysOfTheWeek = () => {
  return (
    <div>
      <Root>
        <DayName>M</DayName>
        <DayName>T</DayName>
        <DayName>W</DayName>
        <DayName>T</DayName>
        <DayName>F</DayName>
        <DayName>S</DayName>
        <DayName>S</DayName>
      </Root>
    </div>
  );
};

export default NamesOfDaysOfTheWeek;
