import React, { useContext } from "react";
import {
  Root,
  StyledBackButton,
  StyledEditButton,
} from "./styles/CalendarHeader.styled";
import { ContextV2 } from "../App";
import { Pages } from "../views/views";

const CalendarHeader = () => {
  const { view, setView } = useContext(ContextV2);
  return (
    <Root>
      <StyledBackButton onClick={() => setView(Pages.FOLDER_LIST)}>
        Back
      </StyledBackButton>
      <StyledEditButton>Edit</StyledEditButton>
    </Root>
  );
};

export default CalendarHeader;
