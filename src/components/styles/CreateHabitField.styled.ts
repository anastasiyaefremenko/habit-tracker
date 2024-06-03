import styled from "styled-components";

export const Root = styled.div`
  padding-inline: 20px;
`;
export const Subtitle = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 12px;
`;
export const HabitNameInput = styled.input`
  height: 40px;
  background-color: #ebeff5;
  border: none;
  outline: none;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding-left: 26px;
  border-radius: 12px;
  margin-bottom: 20px;
`;
export const ColorNameButton = styled.button<{
  value: string;
}>`
  background-color: ${(props) => (props.value ? props.value : "#BCD1F0")};
  margin-bottom: 20px;
  color: white;
  height: 40px;
  border: none;
  outline: none;
  width: 100%;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  border-radius: 12px;
`;
