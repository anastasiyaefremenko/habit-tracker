import React from "react";
import { Root, NavigationButton, Title } from "./styles/CalendarTitle.styled";

const CalendarTitle = (props: any) => {
  // const monthNames: Record<number, string> = {
  //   0: "January",
  //   1: "February",
  //   2: "March",
  //   3: "April",
  //   4: "May",
  //   5: "June",
  //   6: "July",
  //   7: "August",
  //   8: "September",
  //   9: "October",
  //   10: "November",
  //   11: "December",
  // };
  // const d = new Date();
  // const currentMonth = d.getMonth();
  // const month = monthNames[currentMonth];
  // const year = d.getFullYear();

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
