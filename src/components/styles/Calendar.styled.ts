import styled from "styled-components";

export const Root = styled.div`
  padding-inline: 30px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  //position: sticky;
`;
export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div<{ marked?: boolean; isToday: boolean }>`
  background-color: ${(props) => (props.marked ? "#bcd1f0" : "transparent")};
  outline: ${(props) => props.isToday && "1px dashed #909090"};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  border-radius: 100%;
`;

export const DateNumber = styled.p<{ marked?: boolean }>`
  color: ${(props) => (props.marked ? "#FFFFFF" : "#8f9db6")};
  font-family: "Libre Caslon Display", serif;
  //color: #8f9db6;
  font-size: 16px;
`;
