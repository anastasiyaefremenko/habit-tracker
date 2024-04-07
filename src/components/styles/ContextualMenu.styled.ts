import styled from "styled-components";

export const StyledContextualMenuContainer = styled.div`
  z-index: 9000;
  background-color: #f9f9f9;
  position: absolute;
  bottom: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 138px;
  height: 78px;
  border-radius: 12px;
  box-shadow: 1px 1px 1px 0px #a7a7a740;
`;
export const StyledButton = styled.button`
  background-color: transparent;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #515151;
  border: none;
  height: 36px;
  width: 134px;
  border-radius: 10px;
  &:hover {
    background-color: #f0f0f0;
  }
`;
