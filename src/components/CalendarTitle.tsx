import React from "react";
import { Root, NavigationButton, Title } from "./styles/CalendarTitle.styled";

const CalendarTitle = (props: any) => {
  return (
    <Root>
      <NavigationButton onClick={props.showPreviousMonth}>
        {"<"}
      </NavigationButton>
      <Title>
        {props.month} {props.year}
      </Title>
      <NavigationButton onClick={props.showNextMonth}>{">"}</NavigationButton>
    </Root>
  );
};
export default CalendarTitle;
