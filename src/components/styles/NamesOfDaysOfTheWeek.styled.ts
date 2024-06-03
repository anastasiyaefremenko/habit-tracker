import styled from "styled-components";

export const Root = styled.div`
  padding-inline: 20px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-bottom: 26px;
  background-color: #ebeff5;
  height: 28px;
  //position: sticky;
`;

export const DayName = styled.p`
  color: #515151;
  font-family: "Libre Caslon Display", serif;
  display: flex;
  align-items: center;
  justify-content: center;
  //color: #8f9db6;
  font-size: 16px;
`;
