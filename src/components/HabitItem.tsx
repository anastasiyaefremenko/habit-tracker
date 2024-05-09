import React, { useState } from "react";
import {
  Root,
  HabitItemContainer,
  HabitColor,
  HabitName,
  EyeButton,
  EyeIcon,
  ClosedEyeIcon,
} from "./styles/HabitItem.styled";

const HabitItem = (props: any) => {
  const [showEye, setShowEye] = useState(true);
  return (
    <Root>
      <HabitItemContainer>
        <div>
          <HabitColor customColor={props.customColor} show={showEye} />
          <HabitName value={props.name} show={showEye} />
        </div>
        <EyeButton onClick={() => setShowEye(!showEye)}>
          {showEye ? <EyeIcon /> : <ClosedEyeIcon />}
        </EyeButton>
      </HabitItemContainer>
    </Root>
  );
};
export default HabitItem;
