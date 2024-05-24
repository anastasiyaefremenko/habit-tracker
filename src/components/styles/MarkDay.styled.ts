import styled from "styled-components";
import {
  themeColorPrimary,
  themeColorSecondary,
} from "../../styles/themeColors";

export const Root = styled.div`
  padding-inline: 28px;
`;
export const HabitName = styled.input`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  background-color: transparent;
  height: 38px;
  &:disabled {
    color: black;
  }
`;
export const HabitNameContainer = styled.div<{ color?: string }>`
  background-color: ${(props) =>
    props.color ? props.color : themeColorPrimary};
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  width: 100%;
  padding-inline: 28px;
`;
export const Circle = styled.div<{
  marked: boolean;
  selected: boolean;
  color: string;
}>`
  background-color: ${(props) => (props.marked ? props.color : "#f5f5f5")};
  width: ${(props) => (props.selected ? "44px" : "40px")};
  height: ${(props) => (props.selected ? "44px" : "40px")};
  border-radius: 50%;
  border: ${(props) => (props.selected ? "dashed #909090" : "none")};
`;
export const LeftButton = styled.button`
  color: #a3b1cb;
  border: none;
  background-color: transparent;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;
export const RightButton = styled.button`
  color: #a3b1cb;
  border: none;
  background-color: transparent;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
`;
export const CurrentDate = styled.p`
  font-family: "Libre Caslon Display", serif;
  font-size: 20px;
  color: #515151;
`;
