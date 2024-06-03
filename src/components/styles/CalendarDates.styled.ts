import styled from "styled-components";
import { themeColorTertiary, CustomColor } from "../../styles/themeColors";

export const Root = styled.div`
  padding-inline: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;
export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PieChartContainer = styled.div<{ $isToday: boolean }>`
  outline: ${(props) => props.$isToday && "1px dashed #909090"};
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 24px;
  width: 24px;
`;

export const DateNumber = styled.p<{ $marked: boolean }>`
  color: ${(props) => (props.$marked ? "#FFFFFF" : themeColorTertiary)};
  font-family: "Libre Caslon Display", serif;
  font-size: 16px;
  position: absolute;
  z-index: 2;
`;
