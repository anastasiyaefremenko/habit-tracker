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
  back: boolean;
  title: String | undefined;
};

const Header = ({ back, title }: HeaderPropsType) => {
  return (
    <Root>
      <HeaderContainer>
        <LeftContainer>{back && <BackButton />}</LeftContainer>
        <RightContainer>
          <EditButton />
        </RightContainer>
      </HeaderContainer>
      {title && <Title title={title} />}
    </Root>
  );
};
export default Header;
