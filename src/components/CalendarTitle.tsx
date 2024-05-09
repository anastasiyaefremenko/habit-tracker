import React from "react";
import { Root, NavigationButton, Title } from "./styles/CalendarTitle.styled";

const CalendarTitle = (props: any) => {
  return (
    <Root>
      <NavigationButton>{"<"}</NavigationButton>
      <Title>
        {props.month} {props.year}
      </Title>
      <NavigationButton>{">"}</NavigationButton>
    </Root>
  );
};
export default CalendarTitle;
