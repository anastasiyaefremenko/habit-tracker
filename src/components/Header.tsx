import React from "react";
import EditButton from "./EditButton";
import BackButton from "./BackButton";
import {
  Root,
  HeaderContainer,
  LeftContainer,
  RightContainer,
  StyledTitle,
} from "./styles/Header.styled";

type HeaderPropsType = {
  showBack: boolean;
  title: String | undefined;
  onEdit?: () => void;
  onClick?: () => void;
  editButtonDisabled?: boolean;
};

const Header = ({
  showBack,
  title,
  onEdit,
  onClick,
  editButtonDisabled,
}: HeaderPropsType) => {
  return (
    <Root>
      <HeaderContainer>
        <LeftContainer>
          {showBack && <BackButton onClick={onClick} />}
        </LeftContainer>
        <RightContainer>
          {onEdit !== undefined && editButtonDisabled !== undefined && (
            <EditButton
              onEdit={onEdit}
              editButtonDisabled={editButtonDisabled}
            />
          )}
        </RightContainer>
      </HeaderContainer>
      {title && <StyledTitle>{title}</StyledTitle>}
    </Root>
  );
};
export default Header;
