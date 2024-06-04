import styled from "styled-components";
import {
  themeColorPrimary,
  themeColorSecondary,
} from "../../styles/themeColors";
import { IoMdCheckmark } from "react-icons/io";

export const HabitName = styled.input`
  font-family: "Inter", sans-serif;
  font-weight: 300;
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
  padding-inline: 22px;
`;
export const Circle = styled.button<{
  marked: boolean;
  selected: boolean;
  color: string;
}>`
  background-color: ${(props) => (props.marked ? props.color : "#f5f5f5")};
  width: ${(props) => (props.selected ? "44px" : "40px")};
  height: ${(props) => (props.selected ? "44px" : "40px")};
  border-radius: 50%;
  border: ${(props) => (props.selected ? "dashed #909090 1px" : "none")};
  -webkit-tap-highlight-color: transparent;
`;
export const LeftButton = styled.button`
  color: #a3b1cb;
  border: none;
  background-color: transparent;
  font-family: "Inknut Antiqua", serif;
  font-weight: 300;
  font-size: 16px;
  padding-inline: 20px;
  padding-bottom: 21px;
  -webkit-tap-highlight-color: transparent;
`;
export const RightButton = styled.button`
  color: #a3b1cb;
  border: none;
  background-color: transparent;
  font-family: "Inknut Antiqua", serif;
  font-weight: 300;
  font-size: 16px;
  padding-inline: 20px;
  padding-bottom: 21px;
  -webkit-tap-highlight-color: transparent;
`;
export const CurrentDate = styled.p`
  display: flex;
  margin-top: 34px;
  margin-bottom: 16px;
  justify-content: center;
  font-family: "Libre Caslon Display", serif;
  font-size: 20px;
  color: #515151;
`;
export const DayOfTheWeek = styled.p`
  font-family: "Libre Caslon Display", serif;
  font-size: 14px;
  color: #515151;
  margin-top: 4px;
`;
export const DayItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CirclesNavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
export const CheckMark = styled(IoMdCheckmark)<{ marked: boolean }>`
  color: #e5e5e5;
  color: ${(props) => (props.marked ? "white" : "#e5e5e5")};
  width: 21px;
  height: 21px;
`;
