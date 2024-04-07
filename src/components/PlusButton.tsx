import React, { useState } from "react";
import {
  StyledPlusButton,
  StyledPlusButtonContainer,
} from "./styles/PlusButton.styled";
import { ContextualMenu } from "./ContextualMenu";
import { ContextualMenuContextType } from "../types";

export const ContextualMenuContext =
  React.createContext<ContextualMenuContextType>({
    isContextualMenuVisible: false,
    setIsContextualMenuVisible: () => {},
  });

const PlusButton = (props: any) => {
  const [isContextualMenuVisible, setIsContextualMenuVisible] = useState(false);

  const openContextualMenu = (props: any) => {
    setIsContextualMenuVisible(true);
  };
  return (
    <ContextualMenuContext.Provider
      value={{ isContextualMenuVisible, setIsContextualMenuVisible }}
    >
      <StyledPlusButtonContainer>
        {isContextualMenuVisible && <ContextualMenu />}

        <StyledPlusButton onClick={openContextualMenu}></StyledPlusButton>
      </StyledPlusButtonContainer>
    </ContextualMenuContext.Provider>
  );
};

export default PlusButton;
