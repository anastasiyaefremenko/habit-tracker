import React from "react";
import EditButton from "./EditButton";
import BackButton from "./BackButton";
import Title from "./Title";
import {
  Root,
  HeaderContainer,
  LeftContainer,
  RightContainer,
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
      {title && <Title title={title} />}
    </Root>
  );
};
export default Header;
