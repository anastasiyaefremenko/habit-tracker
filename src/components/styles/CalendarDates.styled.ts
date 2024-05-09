import styled from "styled-components";
import { themeColorTertiary, CustomColor } from "../../styles/themeColors";

export const Root = styled.div`
  padding-inline: 30px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 40px;
  //position: sticky;
`;
export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// export const Circle = styled.div<{
//   $marked: boolean;
//   $isToday: boolean;
//   $customColor: string;
// }>`
//   background-color: ${(props) =>
//     props.$marked ? props.$customColor : "transparent"};
//   //outline: ${(props) => props.$isToday && "1px dashed #909090"};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 23px;
//   width: 23px;
//   border-radius: 100%;
// `;
export const PieChartContainer = styled.div<{ $isToday: boolean }>`
  outline: ${(props) => props.$isToday && "1px dashed #909090"};
  //outline: 1px dashed #909090;
  //position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  height: 24px;
  width: 24px;

  //top: 0px;
  /* width: 100%;
  height: 100%; */
`;

export const DateNumber = styled.p<{ $marked: boolean }>`
  color: ${(props) => (props.$marked ? "#FFFFFF" : themeColorTertiary)};
  font-family: "Libre Caslon Display", serif;
  //color: #8f9db6;
  font-size: 16px;
  position: absolute;
  z-index: 2;
`;
