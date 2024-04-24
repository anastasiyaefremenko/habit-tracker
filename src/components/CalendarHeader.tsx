import React from "react";
import {
  Root,
  StyledBackButton,
  StyledEditButton,
} from "./styles/CalendarHeader.styled";

const CalendarHeader = () => {
  return (
    <Root>
      {/* <StyledBackButton>&lt; Back</StyledBackButton> */}
      <StyledBackButton>Back</StyledBackButton>
      <StyledEditButton>Edit</StyledEditButton>
    </Root>
  );
};

export default CalendarHeader;
